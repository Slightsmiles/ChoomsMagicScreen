namespace Backend.Entities
{
    public class Inventory
    {
        public int Id { get; set; }

        public int CharacterId { get; set; }
        public Character Character { get; set; } = null!;

        public int ItemId { get; set; }
        public Item Item { get; set; } = null!;

        public int Quantity { get; set; }

        // Might use this to extend with enchantments, need to look into how this is handled by DM
        public string? EnchantData { get; set; }
    }
}