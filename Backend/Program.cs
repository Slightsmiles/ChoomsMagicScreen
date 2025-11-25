using Backend.Application.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyAllowLocalHostFrontend",
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:5173"
                                            );
                      });
});
builder.Services.AddHttpClient("DndApi", c =>
{
    c.BaseAddress = new Uri("https://www.dnd5eapi.co/api/2014/");
});
builder.Services.AddTransient<EquipmentService>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();



app.Run();

