USE [master]
GO
/****** Object:  Database [WebOnkoDis]    Script Date: 03/02/2023 7:34:37 PM ******/
CREATE DATABASE [WebOnkoDis]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WebOnkoDis', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\WebOnkoDis.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'WebOnkoDis_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\WebOnkoDis_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [WebOnkoDis] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WebOnkoDis].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WebOnkoDis] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WebOnkoDis] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WebOnkoDis] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WebOnkoDis] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WebOnkoDis] SET ARITHABORT OFF 
GO
ALTER DATABASE [WebOnkoDis] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [WebOnkoDis] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WebOnkoDis] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WebOnkoDis] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WebOnkoDis] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WebOnkoDis] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WebOnkoDis] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WebOnkoDis] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WebOnkoDis] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WebOnkoDis] SET  DISABLE_BROKER 
GO
ALTER DATABASE [WebOnkoDis] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WebOnkoDis] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WebOnkoDis] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WebOnkoDis] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WebOnkoDis] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WebOnkoDis] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [WebOnkoDis] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WebOnkoDis] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [WebOnkoDis] SET  MULTI_USER 
GO
ALTER DATABASE [WebOnkoDis] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WebOnkoDis] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WebOnkoDis] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WebOnkoDis] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [WebOnkoDis] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [WebOnkoDis] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [WebOnkoDis] SET QUERY_STORE = OFF
GO
USE [WebOnkoDis]
GO
/****** Object:  Table [dbo].[AboutPost]    Script Date: 03/02/2023 7:34:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AboutPost](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NULL,
	[Description] [nvarchar](100) NULL,
 CONSTRAINT [PK_AboutPost] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ArticlePost]    Script Date: 03/02/2023 7:34:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ArticlePost](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NULL,
	[Description] [nvarchar](50) NULL,
 CONSTRAINT [PK_ArticlePost] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Doctor]    Script Date: 03/02/2023 7:34:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Doctor](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Surname] [nvarchar](50) NOT NULL,
	[Patronymic] [nvarchar](50) NOT NULL,
	[Stage] [int] NULL,
	[Role] [nvarchar](50) NOT NULL,
	[AcademicDegree] [nvarchar](50) NULL,
	[Phone] [nvarchar](50) NULL,
 CONSTRAINT [PK_Doctor] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HomePost]    Script Date: 03/02/2023 7:34:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HomePost](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NULL,
	[Description] [nvarchar](100) NULL,
 CONSTRAINT [PK_HomePost] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Request]    Script Date: 03/02/2023 7:34:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Request](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Phone] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[Sms] [nvarchar](50) NULL,
 CONSTRAINT [PK_Request] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Review]    Script Date: 03/02/2023 7:34:37 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Review](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[DateOnly] [date] NULL,
	[Description] [nvarchar](50) NULL,
 CONSTRAINT [PK_Review] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AboutPost] ON 

INSERT [dbo].[AboutPost] ([Id], [Title], [Description]) VALUES (9, N'1', N'1')
INSERT [dbo].[AboutPost] ([Id], [Title], [Description]) VALUES (14, N'2', N'2')
INSERT [dbo].[AboutPost] ([Id], [Title], [Description]) VALUES (15, N'3', N'3')
SET IDENTITY_INSERT [dbo].[AboutPost] OFF
GO
SET IDENTITY_INSERT [dbo].[ArticlePost] ON 

INSERT [dbo].[ArticlePost] ([Id], [Title], [Description]) VALUES (3, N'1', N'1')
INSERT [dbo].[ArticlePost] ([Id], [Title], [Description]) VALUES (4, N'2', N'2')
INSERT [dbo].[ArticlePost] ([Id], [Title], [Description]) VALUES (5, N'3', N'3')
SET IDENTITY_INSERT [dbo].[ArticlePost] OFF
GO
SET IDENTITY_INSERT [dbo].[Doctor] ON 

INSERT [dbo].[Doctor] ([Id], [Name], [Surname], [Patronymic], [Stage], [Role], [AcademicDegree], [Phone]) VALUES (13, N'1', N'1', N'1', 1, N'1', N'1', N'1')
INSERT [dbo].[Doctor] ([Id], [Name], [Surname], [Patronymic], [Stage], [Role], [AcademicDegree], [Phone]) VALUES (14, N'3', N'3', N'3', 3, N'3', N'3', N'3')
SET IDENTITY_INSERT [dbo].[Doctor] OFF
GO
SET IDENTITY_INSERT [dbo].[HomePost] ON 

INSERT [dbo].[HomePost] ([Id], [Title], [Description]) VALUES (31, N'1', N'1')
INSERT [dbo].[HomePost] ([Id], [Title], [Description]) VALUES (32, N'2', N'2')
INSERT [dbo].[HomePost] ([Id], [Title], [Description]) VALUES (43, N'3', N'3')
SET IDENTITY_INSERT [dbo].[HomePost] OFF
GO
SET IDENTITY_INSERT [dbo].[Request] ON 

INSERT [dbo].[Request] ([Id], [Name], [Phone], [Email], [Sms]) VALUES (4, N'1', N'1', N'1', N'1')
INSERT [dbo].[Request] ([Id], [Name], [Phone], [Email], [Sms]) VALUES (5, N'3', N'3', N'3', N'3')
INSERT [dbo].[Request] ([Id], [Name], [Phone], [Email], [Sms]) VALUES (9, N'1', N'2', N'3', N'4')
SET IDENTITY_INSERT [dbo].[Request] OFF
GO
SET IDENTITY_INSERT [dbo].[Review] ON 

INSERT [dbo].[Review] ([Id], [Name], [DateOnly], [Description]) VALUES (3, N'1', CAST(N'2023-02-23' AS Date), N'1')
INSERT [dbo].[Review] ([Id], [Name], [DateOnly], [Description]) VALUES (9, N'2', CAST(N'2023-01-31' AS Date), N'2')
SET IDENTITY_INSERT [dbo].[Review] OFF
GO
USE [master]
GO
ALTER DATABASE [WebOnkoDis] SET  READ_WRITE 
GO
