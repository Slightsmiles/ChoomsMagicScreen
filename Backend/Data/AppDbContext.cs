using Microsoft.EntityFrameworkCore;

using Backend.Entities;

namespace Backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<Character> Characters => Set<Character>();
        public DbSet<Race> Races => Set<Race>();
        public DbSet<Class> Classes => Set<Class>();
        public DbSet<CharacterClass> CharacterClasses => Set<CharacterClass>();
        public DbSet<Item> Items => Set<Item>();
        public DbSet<Inventory> Inventory => Set<Inventory>();
        public DbSet<Equipment> Equipment => Set<Equipment>();
        public DbSet<EquipmentSlot> EquipmentSlots => Set<EquipmentSlot>();

        public DbSet<CharacterStats> CharacterStats => Set<CharacterStats>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // CharacterClass UNIQUE (character_id, class_id)
            modelBuilder.Entity<CharacterClass>()
                .HasIndex(cc => new { cc.CharacterId, cc.ClassId })
                .IsUnique();

            // Inventory UNIQUE (character_id, item_id)
            modelBuilder.Entity<Inventory>()
                .HasIndex(i => new { i.CharacterId, i.ItemId })
                .IsUnique();

            // Inventory quantity check
            modelBuilder.Entity<Inventory>()
                .HasCheckConstraint("CK_Inventory_Quantity", "\"Quantity\" > 0");

            // Equipment UNIQUE (character_id, slot_id)
            modelBuilder.Entity<Equipment>()
                .HasIndex(e => new { e.CharacterId, e.SlotId })
                .IsUnique();

            // Optional: cascade deletes
            modelBuilder.Entity<Inventory>()
                .HasOne(i => i.Character)
                .WithMany(c => c.Inventory)
                .HasForeignKey(i => i.CharacterId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CharacterClass>()
                .HasOne(cc => cc.Character)
                .WithMany(c => c.CharacterClasses)
                .HasForeignKey(cc => cc.CharacterId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Equipment>()
                .HasOne(e => e.Character)
                .WithMany(c => c.Equipment)
                .HasForeignKey(e => e.CharacterId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Character>()
                .HasOne(c => c.Stats)
                .WithOne(s => s.Character)
                .HasForeignKey<CharacterStats>(s => s.CharacterId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<CharacterStats>()
                .HasIndex(cs => cs.CharacterId)
                .IsUnique();
        }
    }
}