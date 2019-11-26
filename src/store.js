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
  }
};
