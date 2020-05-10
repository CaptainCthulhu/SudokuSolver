﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using sodokusolver;

namespace sodokusolver.Migrations
{
    [DbContext(typeof(SudokuContext))]
    partial class SudokuContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("sodokusolver.Grid", b =>
                {
                    b.Property<int>("GridId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.HasKey("GridId");

                    b.ToTable("Grids");
                });

            modelBuilder.Entity("sodokusolver.GridElement", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("GridId")
                        .HasColumnType("int");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.Property<int>("XLocation")
                        .HasColumnType("int");

                    b.Property<int>("YLocation")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("GridId");

                    b.ToTable("GridElements");
                });

            modelBuilder.Entity("sodokusolver.GridElement", b =>
                {
                    b.HasOne("sodokusolver.Grid", "Grid")
                        .WithMany("GridElements")
                        .HasForeignKey("GridId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}