using System.Collections.Generic;

namespace Backend.Entities
{
    public class EquipmentSlot
    {
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        // Navigation property
        public ICollection<Equipment> Equipment { get; set; } = new List<Equipment>();
    }
}