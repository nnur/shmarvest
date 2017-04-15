var schema = {
  user: {
    id,
    email: string,
    encryptedPassword: string,
    firstName: string,
    lastName: string,
    contactPhone: string,
    billableRate: number,
    timeZone: string,
    isAdmin: bool
  }
}

{
  organization: {
    id,
    employees: [userId, userId, userId],
    clients: [{
      name: string,
      title: string,
      email: string,
      phone: string,
      fax: string
    }],
    companyName: string,
    webAddress: string,
    teamSize: string,
    createdAt: date,
    subscriptionPlan: string,
    timeZone: string,
    fiscalYearStart: month,
    currency: string,
    hoursPerWeekLimit: number,
    projects: [{
      id,
      team: [userid, userid],
      name: string,
      client: string,
      notes: string,
      startDate: date,
      endDate: date,
      createdAt: date,
      tasks: [design, programming, knitting],
      timeSheets: [{
        project: string,
        task: string,
        user: id,
        description: string,
        time: string,
        createdAt: date,
        onGoing: true
      }]  
    }],
    invoices: [{
      client: string,
      issueDate: date,
      dueDate: date,
      discount: number,
      currency: "USD or CAD etc",
      subject: string,
      notes: string,
      items: [{
        type: service or product,
        description: string,
        quantity: number,
        unitPrice: number
      }]

    }]
  }
}

