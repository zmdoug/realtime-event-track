const ReportRepository = require('../repositories/ReportRepository');
const { format } = require('date-fns');

class ReportController {
  async report(req, res) {
    try {
      const { profileId } = req.params;

      const reportRepository = new ReportRepository();
      const report = await reportRepository.reportByUserId(profileId);

      const x = report.map(event => ({
        ...event._doc,
        date: format(event.createdAt, 'MM/dd/yyyy KK:mm:ss')
      }));

      res.status(200).json(x);
    } catch (error) {
      console.log(error)
    }

  }
}

module.exports = new ReportController();