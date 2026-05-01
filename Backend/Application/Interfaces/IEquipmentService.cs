using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Application.DTOs;
using Backend.Application.Interfaces;
namespace Backend.Application.Interfaces
{
    public interface IEquipmentService
    {
        Task<List<EquipmentListDTO>> GetAllEquipmentAsync();
    }
}