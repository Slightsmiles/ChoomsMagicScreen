using Backend.Application.DTOs;

namespace Backend.Mapping
{
    public static class EquipmentMapping
    {
        // Maps from a full EquipmentDTO to a list item DTO
        public static EquipmentListDTO ToListItem(this EquipmentDTO dto)
        {
            return new EquipmentListDTO
            {
                Index = dto.Index,
                Name = dto.Name
            };
        }

        // Maps from API EquipmentDTO to backend EquipmentDTO
        public static EquipmentDTO ToEquipmentDTO(this EquipmentDTO dto)
        {
            return new EquipmentDTO
            {
                Index = dto.Index,
                Name = dto.Name,
                EquipmentCategory = dto.EquipmentCategory != null ? new EquipmentCategoryDTO
                {
                    Index = dto.EquipmentCategory.Index,
                    Name = dto.EquipmentCategory.Name,
                    Url = dto.EquipmentCategory.Url
                } : new EquipmentCategoryDTO()
            };
        }
    }
}
