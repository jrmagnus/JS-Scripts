function run() {
	const holidays = ["01/01/2021", "25/12/2022"]
  //put dates
	const data = new Date()
	const day = data.getDate().toString()
	const month = (data.getMonth() + 1).toString()
	const year = data.getFullYear().toString()
	const today = day + "/" + month + "/" + year

	return holidays.includes(today)
}
