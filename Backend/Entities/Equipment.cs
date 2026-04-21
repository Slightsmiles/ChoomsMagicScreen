using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Entities
{
    public class Equipment
    {
        public int Id { get; set; }

        public int CharacterId { get; set; }
        public Character Character { get; set; } = null!;

        public int ItemId { get; set; }
        public Item Item { get; set; } = null!;

        public int SlotId { get; set; }
        public EquipmentSlot Slot { get; set; } = null!;
    }
}