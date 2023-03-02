using WebOnkoDis.Helper;
using WebOnkoDis.Repositories;
using WebOnkoDis.Repositories.Interfaces;
using WebOnkoDis.Services;
using WebOnkoDis.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddSingleton(new DbOptions() { ConnectionString = connectionString });

builder.Services.AddTransient<IAboutPostService, AboutPostService>();
builder.Services.AddTransient<IAboutPostRepository, AboutPostRepository>();

builder.Services.AddTransient<IArticlePostService, ArticlePostService>();
builder.Services.AddTransient<IArticlePostRepository, ArticlePostRepository>();

builder.Services.AddTransient<IDoctorService, DoctorService>();
builder.Services.AddTransient<IDoctorRepository, DoctorRepository>();

builder.Services.AddTransient<IHomePostService, HomePostService>();
builder.Services.AddTransient<IHomePostRepository, HomePostRepository>();

builder.Services.AddTransient<IRequestService, RequestService>();
builder.Services.AddTransient<IRequestRepository, RequestRepository>();

builder.Services.AddTransient<IReviewService, ReviewService>();
builder.Services.AddTransient<IReviewRepository, ReviewRepository>();

var app = builder.Build();

app.UseCors(cors => cors.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
