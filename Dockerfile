#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:2.1 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:2.1 AS build
WORKDIR /src
COPY ["ElTablet/ElTablet.csproj", "ElTablet/"]
RUN dotnet restore "ElTablet/ElTablet.csproj"
COPY . .
WORKDIR "/src/ElTablet"
RUN dotnet build "ElTablet.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ElTablet.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ElTablet.dll"]