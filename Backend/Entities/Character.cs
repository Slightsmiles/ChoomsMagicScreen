using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Entities
{
    public class Character
    {
        public int Id {get; set;}

        public int RaceId {get; set;}

        public Race Race {get; set;}

        public string Name {get;set;}

        public int Level {get; set;}

        // Navigation 
         public ICollection<Inventory> Inventory { get; set; } = new List<Inventory>();
         public ICollection<Equipment> Equipment { get; set; } = new List<Equipment>();
         public ICollection<CharacterClass> CharacterClasses { get; set; } = new List<CharacterClass>();
    }
}