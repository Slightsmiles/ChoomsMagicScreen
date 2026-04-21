using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Entities
{
    public class CharacterStats
    {
        public int Id {get; set;}

        public int CharacterId {get; set;}
        public Character Character {get; set;}

        public int Strength {get; set;}

        public int Dexterity {get; set;}

        public int Constitution {get; set;}

        public int Intelligence {get; set;}

        public int Wisdom {get; set;}

        public int Charisma {get; set;}

        


    }
}