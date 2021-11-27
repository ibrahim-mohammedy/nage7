using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;

namespace Tablet.Data.Migrations
{
    public partial class CreateIdentitySchema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    UserName = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(maxLength: 256, nullable: true),
                    Email = table.Column<string>(maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(nullable: false),
                    PasswordHash = table.Column<string>(nullable: true),
                    SecurityStamp = table.Column<string>(nullable: true),
                    ConcurrencyStamp = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(nullable: false),
                    TwoFactorEnabled = table.Column<bool>(nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(nullable: true),
                    LockoutEnabled = table.Column<bool>(nullable: false),
                    AccessFailedCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RoleId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<string>(nullable: false),
                    ClaimType = table.Column<string>(nullable: true),
                    ClaimValue = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(maxLength: 128, nullable: false),
                    ProviderKey = table.Column<string>(maxLength: 128, nullable: false),
                    ProviderDisplayName = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    RoleId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(nullable: false),
                    LoginProvider = table.Column<string>(maxLength: 128, nullable: false),
                    Name = table.Column<string>(maxLength: 128, nullable: false),
                    Value = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateTable(
               name: "Grades",
               columns: table => new
               {
                   Id = table.Column<int>(nullable: false),
                   Name = table.Column<string>(maxLength: 128, nullable: false)
               },
               constraints: table =>
               {
                   table.PrimaryKey("PK_Grades", x => new { x.Id });
               });

            migrationBuilder.CreateTable(
              name: "Years",
              columns: table => new
              {
                  Id = table.Column<int>(nullable: false),
                  Name = table.Column<string>(maxLength: 128, nullable: false),
                  GradeId = table.Column<int>(nullable: false),
              },
              constraints: table =>
              {
                  table.PrimaryKey("PK_Years", x => new { x.Id });
                  table.ForeignKey(
                        name: "FK_Years_Grades_GradeId",
                        column: x => x.GradeId,
                        principalTable: "Grades",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
              });

            migrationBuilder.CreateTable(
              name: "Subjects",
              columns: table => new
              {
                  Id = table.Column<int>(nullable: false),
                  Name = table.Column<string>(maxLength: 128, nullable: false),
                  YearId = table.Column<int>(nullable: false),
              },
              constraints: table =>
              {
                  table.PrimaryKey("PK_Subjects", x => new { x.Id });
                  table.ForeignKey(
                        name: "FK_Subjects_Years_YearId",
                        column: x => x.YearId,
                        principalTable: "Years",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
              });

            migrationBuilder.CreateTable(
              name: "Units",
              columns: table => new
              {
                  Id = table.Column<int>(nullable: false),
                  Name = table.Column<string>(maxLength: 128, nullable: false),
                  SubjectId = table.Column<int>(nullable: false),
              },
              constraints: table =>
              {
                  table.PrimaryKey("PK_Units", x => new { x.Id });
                  table.ForeignKey(
                        name: "FK_Units_Subjects_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
              });

            migrationBuilder.CreateTable(
             name: "Lessons",
             columns: table => new
             {
                 Id = table.Column<int>(nullable: false),
                 Name = table.Column<string>(maxLength: 128, nullable: false),
                 UnitId = table.Column<int>(nullable: false),
             },
             constraints: table =>
             {
                 table.PrimaryKey("PK_Lessons", x => new { x.Id });
                 table.ForeignKey(
                       name: "FK_Lessons_Units_UnitId",
                       column: x => x.UnitId,
                       principalTable: "Units",
                       principalColumn: "Id",
                       onDelete: ReferentialAction.Cascade);
             });

            migrationBuilder.CreateTable(
             name: "Questions",
             columns: table => new
             {
                 Id = table.Column<int>(nullable: false),
                 Title = table.Column<string>(maxLength: 128, nullable: false),
                 Body = table.Column<string>(maxLength: 1024, nullable: false),
                 Answers = table.Column<string>(maxLength: 1024, nullable: false),
                 CreatedBy = table.Column<string>(nullable: false, maxLength: 450)
             },
             constraints: table =>
             {
                 table.PrimaryKey("PK_Questions", x => new { x.Id });
                 table.ForeignKey(
                      name: "FK_Questions_Users_CreatedBy",
                      column: x => x.CreatedBy,
                      principalTable: "AspNetUsers",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
             });

            migrationBuilder.CreateTable(
             name: "ExamTypes",
             columns: table => new
             {
                 Id = table.Column<int>(nullable: false),
                 Name = table.Column<string>(maxLength: 128, nullable: false),
             },
             constraints: table =>
             {
                 table.PrimaryKey("PK_ExamTypes", x => new { x.Id });
             });

            migrationBuilder.CreateTable(
             name: "Exams",
             columns: table => new
             {
                 Id = table.Column<int>(nullable: false),
                 Name = table.Column<string>(maxLength: 128, nullable: false),
                 TypeId = table.Column<int>(nullable: false),
                 SubjectId = table.Column<int>(nullable: false),
                 CreatedBy = table.Column<string>(nullable: false, maxLength: 450)
             },
             constraints: table =>
             {
                 table.PrimaryKey("PK_Exams", x => new { x.Id });
                 table.ForeignKey(
                      name: "FK_Exams_Users_CreatedBy",
                      column: x => x.CreatedBy,
                      principalTable: "AspNetUsers",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
                 table.ForeignKey(
                      name: "FK_Exams_ExamTypes_TypeId",
                      column: x => x.TypeId,
                      principalTable: "ExamTypes",
                      principalColumn: "Id",
                      onDelete: ReferentialAction.Cascade);
                 table.ForeignKey(
                     name: "FK_Exams_Subjects_SubjectId",
                     column: x => x.SubjectId,
                     principalTable: "Subjects",
                     principalColumn: "Id",
                     onDelete: ReferentialAction.Cascade);
             });

            migrationBuilder.InsertData("AspNetRoles", new string[] { "Id", "Name", "NormalizedName" }, new object[] { "1", "Administrator", "Administrator" });
            migrationBuilder.InsertData("AspNetRoles", new string[] { "Id", "Name", "NormalizedName" }, new object[] { "2", "Teacher", "Teacher" });
            migrationBuilder.InsertData("AspNetRoles", new string[] { "Id", "Name", "NormalizedName" }, new object[] { "3", "Student", "Student" });

            migrationBuilder.InsertData("Grades", new string[] { "Id", "Name" }, new object[] { 1, "المرحلة الابتدائية" });
            migrationBuilder.InsertData("Grades", new string[] { "Id", "Name" }, new object[] { 2, "المرحلة الإعدادية" });
            migrationBuilder.InsertData("Grades", new string[] { "Id", "Name" }, new object[] { 3, "المرحلة الثانوية" });

            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 1, "الصف الأول الإبتدائي", 1 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 2, "الصف الثاني الإبتدائي", 1 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 3, "الصف الثالث الإبتدائي", 1 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 4, "الصف الرابع الإبتدائي", 1 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 5, "الصف الخامس الإبتدائي", 1 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 6, "الصف السادس الإبتدائي", 1 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 7, "الصف الأول الإعدادي", 2 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 8, "الصف الثاني الإعدادي", 2 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 9, "الصف الثالث الإعدادي", 2 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 10, "الصف الأول الثانوي", 3 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 11, "الصف الثاني الثانوي", 3 });
            migrationBuilder.InsertData("Years", new string[] { "Id", "Name", "GradeId" }, new object[] { 12, "الصف الثالث الثانوي", 3 });

            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 1, "لغة عربية", 1 });
            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 2, "لغة إنجليزية", 1 });
            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 3, "اكتشف", 1 });

            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 4, "لغة عربية", 2 });
            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 5, "لغة إنجليزية", 2 });

            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 6, "لغة عربية", 3 });
            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 7, "لغة إنجليزية", 3 });
            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 8, "رياضيات", 3 });

            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 9, "لغة عربية", 4 });
            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 10, "لغة إنجليزية", 4 });
            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 11, "رياضيات", 4 });
            migrationBuilder.InsertData("Subjects", new string[] { "Id", "Name", "YearId" }, new object[] { 12, "علوم", 4 });

            migrationBuilder.InsertData("ExamTypes", new string[] { "Id", "Name" }, new object[] { 0, "امتحان عام" });
            migrationBuilder.InsertData("ExamTypes", new string[] { "Id", "Name" }, new object[] { 1, "تدريب على درس" });
            migrationBuilder.InsertData("ExamTypes", new string[] { "Id", "Name" }, new object[] { 2, "تدريب على وحدة" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
               name: "Grades");
            migrationBuilder.DropTable(
               name: "Years");
            migrationBuilder.DropTable(
               name: "Subjects");
            migrationBuilder.DropTable(
               name: "Units");
            migrationBuilder.DropTable(
               name: "Lessons");
            migrationBuilder.DropTable(
               name: "Questions");
            migrationBuilder.DropTable(
               name: "Exams");
        }
    }
}