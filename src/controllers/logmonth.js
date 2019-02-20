const Sequelize = require('sequelize');

const excel = require('exceljs');
const { logs } = require('../database/models');
const tempfile = require('tempfile');

const Op = Sequelize.Op;
exports.get = (req, res) => {
  const year = req.params.year;
  const month = req.params.month;
  const from = new Date(year, month - 1, 1).toISOString();
  const to = new Date(year, month, 1).toISOString();
  const car_id = req.cookies.car_id;
  logs.findAll({
    where: {
      createdAt: {
        [Op.between]: [from, to],
      },
      car_id,
    },
    attributes: ['purpose', 'note', 'start_km', 'end_km', 'driver_name', 'car_id', 'createdAt'],
    raw: true,
  })
    .then((result) => {
      const workbook = new excel.Workbook();
      const sheet = workbook.addWorksheet('MySheet');

      sheet.addRow().values = Object.keys(result[0]);
      result.forEach((log) => {
        sheet.addRow().values = Object.values(log);
      });
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', 'attachment; filename=logs.xlsx');

      workbook.xlsx.write(res).then(() => {
        res.end();
      });
    })
    .catch(() => (res.status(500).end()));
};
