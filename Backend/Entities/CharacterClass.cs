namespace Backend.Entities
{
    public class CharacterClass
    {
        public int Id { get; set; }

        public int CharacterId { get; set; }
        public Character Character { get; set; } = null!;

        public int ClassId { get; set; }
        public Class Class { get; set; } = null!;

        public int Level { get; set; }
    }
}