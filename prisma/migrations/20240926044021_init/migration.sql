BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Employee] (
    [employee_id] INT NOT NULL IDENTITY(1,1),
    [employee_name] NVARCHAR(1000) NOT NULL,
    [salary] FLOAT(53) NOT NULL,
    [department_id] INT,
    CONSTRAINT [Employee_pkey] PRIMARY KEY CLUSTERED ([employee_id])
);

-- CreateTable
CREATE TABLE [dbo].[Department] (
    [department_id] INT NOT NULL IDENTITY(1,1),
    [department_name] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Department_pkey] PRIMARY KEY CLUSTERED ([department_id])
);

-- CreateTable
CREATE TABLE [dbo].[Project] (
    [project_id] INT NOT NULL IDENTITY(1,1),
    [project_name] NVARCHAR(1000) NOT NULL,
    [project_description] NVARCHAR(1000),
    CONSTRAINT [Project_pkey] PRIMARY KEY CLUSTERED ([project_id])
);

-- CreateTable
CREATE TABLE [dbo].[Assignment] (
    [assignment_id] INT NOT NULL IDENTITY(1,1),
    [assignment_status] NVARCHAR(1000) NOT NULL,
    [employee_id] INT NOT NULL,
    [project_id] INT NOT NULL,
    CONSTRAINT [Assignment_pkey] PRIMARY KEY CLUSTERED ([assignment_id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Employee] ADD CONSTRAINT [Employee_department_id_fkey] FOREIGN KEY ([department_id]) REFERENCES [dbo].[Department]([department_id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Assignment] ADD CONSTRAINT [Assignment_employee_id_fkey] FOREIGN KEY ([employee_id]) REFERENCES [dbo].[Employee]([employee_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Assignment] ADD CONSTRAINT [Assignment_project_id_fkey] FOREIGN KEY ([project_id]) REFERENCES [dbo].[Project]([project_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
