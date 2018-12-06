import { helpers } from '../../server/_helpers';
var functions = [
  {
    name: 'Stale calendars',
    parameters: {
      filler: {
        type: 'readOnly',
        value: 'This displays a list of calendars that have not synced within the last 48 hours.'
      }
    },
    server: function() {
      const dateCutOff = moment()
        .utc()
        .add(-48, 'hours')
        .toDate();
        console.log(dateCutOff)
      const calendarList = Calendar.find(
        { $or: [{ 'reference.lastSync': null }, { 'reference.lastSync': { $lt: dateCutOff } }] },
        { _id: 1, name: 1, ownerId: 1, 'reference.lastSync': 1 }
      ).fetch();

      return helpers.collectionToTable(calendarList);
    },
    client: function() {}
  }
];

export { functions };
