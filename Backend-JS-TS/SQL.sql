CREATE DATABASE hospital;

CREATE TABLE pacientes(
  cpf varchar(11) primary key,
  nome varchar(255) not null,
  data_de_nascimento date null,
  genero varchar(50) not null,
  telefone varchar(15) not null,
  endereco varchar(255) null
);

CREATE TABLE especializacoes(
  id SERIAL primary key,
  nome VARCHAR(255) unique not null,
);

CREATE TABLE medicos(
  crm varchar(9) primary key,
  nome varchar(255) not null,
  telefone varchar(15) not null,
  especializacao_id int not null,
  FOREIGN KEY(especializacao_id) REFERENCES especializacoes(id)
);

CREATE TABLE consultas(
  id SERIAL primary key,
  paciente_cpf VARCHAR(11) not null,
  medico_crm VARCHAR(9) not null,
  data date not null,
  observacoes text not null,
  tipo_do_atendimento VARCHAR(15) (CHECK IN "plano de saúde", "particular"),
  FOREIGN KEY (paciente_cpf) REFERENCES pacientes(cpf),
  FOREIGN KEY (medico_crm) REFERENCES medicos (crm)
);

CREATE TABLE tratamentos(
  consulta_id INT not null,
  medicamentos VARCHAR(255),
  tratamento text,
  FOREIGN KEY (consulta_id) REFERENCES consultas(id)
);