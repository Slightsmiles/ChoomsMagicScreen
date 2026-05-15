using Backend.Application.Services;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Application.Interfaces;
using Microsoft.Extensions.Options;
var builder = WebApplication.CreateBuilder(args);



// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

builder.Services.AddOpenApi();
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AngularPolicy",
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200"
                                            );
                      });
});
builder.Services.AddHttpClient("DndApi", c =>
{
    c.BaseAddress = new Uri("https://www.dnd5eapi.co/api/2014/");
});
builder.Services.AddScoped<IEquipmentService, EquipmentService>();
builder.Services.AddHttpClient("Open5EApi", c =>
{
    c.BaseAddress = new Uri("https://api.open5e.com/v2/");
});
builder.Services.AddScoped<IRaceService, RaceService>();


var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors("AngularPolicy");
app.MapControllers();

// Configure the HTTP request pipeline.


if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}





app.Run();

