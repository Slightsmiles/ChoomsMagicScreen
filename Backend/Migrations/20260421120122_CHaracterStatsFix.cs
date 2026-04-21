using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class CHaracterStatsFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CharacterClass_Characters_CharacterId",
                table: "CharacterClass");

            migrationBuilder.DropForeignKey(
                name: "FK_CharacterClass_Classes_ClassId",
                table: "CharacterClass");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CharacterClass",
                table: "CharacterClass");

            migrationBuilder.RenameTable(
                name: "CharacterClass",
                newName: "CharacterClasses");

            migrationBuilder.RenameIndex(
                name: "IX_CharacterClass_ClassId",
                table: "CharacterClasses",
                newName: "IX_CharacterClasses_ClassId");

            migrationBuilder.RenameIndex(
                name: "IX_CharacterClass_CharacterId_ClassId",
                table: "CharacterClasses",
                newName: "IX_CharacterClasses_CharacterId_ClassId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CharacterClasses",
                table: "CharacterClasses",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterClasses_Characters_CharacterId",
                table: "CharacterClasses",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterClasses_Classes_ClassId",
                table: "CharacterClasses",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CharacterClasses_Characters_CharacterId",
                table: "CharacterClasses");

            migrationBuilder.DropForeignKey(
                name: "FK_CharacterClasses_Classes_ClassId",
                table: "CharacterClasses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CharacterClasses",
                table: "CharacterClasses");

            migrationBuilder.RenameTable(
                name: "CharacterClasses",
                newName: "CharacterClass");

            migrationBuilder.RenameIndex(
                name: "IX_CharacterClasses_ClassId",
                table: "CharacterClass",
                newName: "IX_CharacterClass_ClassId");

            migrationBuilder.RenameIndex(
                name: "IX_CharacterClasses_CharacterId_ClassId",
                table: "CharacterClass",
                newName: "IX_CharacterClass_CharacterId_ClassId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CharacterClass",
                table: "CharacterClass",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterClass_Characters_CharacterId",
                table: "CharacterClass",
                column: "CharacterId",
                principalTable: "Characters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CharacterClass_Classes_ClassId",
                table: "CharacterClass",
                column: "ClassId",
                principalTable: "Classes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
