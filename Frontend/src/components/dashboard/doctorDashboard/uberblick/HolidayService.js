

export const getGermanHolidays = async () => {
  try {
    const response = await fetch('https://calendarific.com/api/v2/holidays?&api_key=2TthmIgKtmRisUriOUrOxesa63Ypr2JI&country=DE&year=2024&language=de');
    if (!response.ok) {
      throw new Error('Failed to fetch data from API');
    }
    const data = await response.json();
    return data.response.holidays;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};