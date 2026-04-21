using System.Collections.Generic;

namespace Backend.Entities
{
    public class Class
    {
        public int Id { get; set; }

        public string ClassApiIndex { get; set; } = null!;

        public string Name { get; set; } = null!;

        // Navigation property
        public ICollection<CharacterClass> CharacterClasses { get; set; } = new List<CharacterClass>();
    }
}