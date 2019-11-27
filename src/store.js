import { seedData } from './seed';

export const store = {
  state: {
    seedData
  },
  getActiveDay() {
    return this.state.seedData.find(day => day.active);
  },
  setActiveDay(dayId) {
    this.state.seedData.map(day => {
      day.id === dayId ? (day.active = true) : (day.active = false);
    });
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ details: eventDetails, edit: false });
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const eventObj = this.getEventObj(dayId, eventDetails);
    eventObj.edit = true;
  },
  updateEvent(dayId, originalEventDetails, updatedEventDetails) {
    const eventObj = this.getEventObj(dayId, originalEventDetails);
    eventObj.details = updatedEventDetails;
    eventObj.edit = false;
  },
  removeEvent(dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);
    dayObj.events = dayObj.events.filter(
      event => event.details !== eventDetails
    );
  },
  // helper function
  getEventObj(dayId, eventDetails) {
    const dayObj = this.state.seedData.find(day => day.id === dayId);
    return dayObj.events.find(event => event.details === eventDetails);
  },
  // helper function
  resetEditOfAllEvents() {
    this.state.seedData.map(day => {
      day.events.map(event => {
        event.edit = false;
      });
    });
  }
};
