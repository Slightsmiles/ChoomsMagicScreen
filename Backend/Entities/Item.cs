using System.Collections.Generic;

namespace Backend.Entities
{
    public class Item
    {
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public string Type { get; set; } = null!;

        public bool Stackable { get; set; }

        public string? ItemApiIndex { get; set; }

        // Navigation properties
        public ICollection<Inventory> InventoryItems { get; set; } = new List<Inventory>();
        public ICollection<Equipment> EquipmentItems { get; set; } = new List<Equipment>();
    }
}