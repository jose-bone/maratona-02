const Database = require("../db/config");

module.exports = {
  async get() {
    // inicia a conexão com o banco de dados
    const db = await Database();

    const jobs = await db.all("SELECT * FROM jobs");

    // fecha a conexão com o banco de dados
    await db.close();

    return jobs.map((job) => ({
      id: job.id,
      name: job.name,
      "daily-hours": job.daily_hours,
      "total-hours": job.total_hours,
      createdAt: job.createdAt,
    }));
  },

  async update(updatedJob, jobId) {
    // inicia a conexão com o banco de dados 
    const db = await Database()

    await db.run(`UPDATE jobs SET
      name = "${updatedJob.name}",
      daily_hours = ${updatedJob["daily-hours"]},
      total_hours = ${updatedJob["total-hours"]}
      WHERE id = ${jobId}
    `)

    // fecha a conexão com o banco de dados
    await db.close()
  },

  async delete(id) {
    // inicia a conexão com o banco de dados 
    const db = await Database()

    await db.run(`DELETE FROM jobs WHERE id = ${id}`)

    // fecha a conexão com o banco de dados
    await db.close()

  },

  async create(newJob) {
    // inicia a conexão com o banco de dados 
    const db = await Database()

    await db.run(`INSERT INTO jobs (
      name,
      daily_hours,
      total_hours,
      createdAt
    ) VALUES (
      "${newJob.name}",
      ${newJob["daily-hours"]},
      ${newJob["total-hours"]},
      CURRENT_TIMESTAMP
    )`)

    // fecha a conexão com o banco de dados
    await db.close()
  },
};
