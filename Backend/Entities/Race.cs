using System.Collections.Generic;

namespace Backend.Entities
{
    public class Race
    {
        public int Id { get; set; }

        public string RaceApiIndex { get; set; } = null!;

        public string Name { get; set; } = null!;

        // Navigation
        public ICollection<Character> Characters { get; set; } = new List<Character>();
    }
}