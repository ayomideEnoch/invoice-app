import { createStore } from 'vuex'

const store = createStore({
  state () {
    return { 
        invoiceDatabase: [
            {
              billFrom: {
                streetAddress: "8, Moses Kolade street.",
                city: "Adiyan",
                postCode: "100001",
                country: "Nigeria",
              },
              billTo: {
                clientName: "Ayo Ibosiola",
                clientEmail: "ayomideibosiola100@gmail.com",
                streetAddress: "3, Bamboye.",
                city: "Ikeja",
                postCode: "100002",
                country: "Niger",
              },
              invoiceData: {
                invoiceDate: "29 March, 2021",
                paymentTerms: "30 Days",
                projectDescription: "Design of school",
              },
              itemList: [
                {
                  itemName: "Laptop",
                  quantity: "4",
                  price: "#23,000",
                },
                {
                  itemName: "Laptop school bag",
                  quantity: "4",
                  price: "#1,300",
                },
              ],
            },
            {
                billFrom: {
                  streetAddress: "8, Moses Kolade street.",
                  city: "Adiyan",
                  postCode: "100001",
                  country: "Nigeria",
                },
                billTo: {
                  clientName: "Ayo Ibosiola",
                  clientEmail: "ayomideibosiola100@gmail.com",
                  streetAddress: "3, Bamboye.",
                  city: "Ikeja",
                  postCode: "100002",
                  country: "Niger",
                },
                invoiceData: {
                  invoiceDate: "29 March, 2021",
                  paymentTerms: "30 Days",
                  projectDescription: "Design of school",
                },
                itemList: [
                  {
                    itemName: "Laptop",
                    quantity: "4",
                    price: "#23,000",
                  },
                  {
                    itemName: "Laptop school bag",
                    quantity: "4",
                    price: "#1,300",
                  },
                ],
              },
              {
                billFrom: {
                  streetAddress: "8, Moses Kolade street.",
                  city: "Adiyan",
                  postCode: "100001",
                  country: "Nigeria",
                },
                billTo: {
                  clientName: "Ayo Ibosiola",
                  clientEmail: "ayomideibosiola100@gmail.com",
                  streetAddress: "3, Bamboye.",
                  city: "Ikeja",
                  postCode: "100002",
                  country: "Niger",
                },
                invoiceData: {
                  invoiceDate: "29 March, 2021",
                  paymentTerms: "30 Days",
                  projectDescription: "Design of school",
                },
                itemList: [
                  {
                    itemName: "Laptop",
                    quantity: "4",
                    price: "#23,000",
                  },
                  {
                    itemName: "Laptop school bag",
                    quantity: "4",
                    price: "#1,300",
                  },
                  {
                    billFrom: {
                      streetAddress: "8, Moses Kolade street.",
                      city: "Adiyan",
                      postCode: "100001",
                      country: "Nigeria",
                    },
                    billTo: {
                      clientName: "Ayo Ibosiola",
                      clientEmail: "ayomideibosiola100@gmail.com",
                      streetAddress: "3, Bamboye.",
                      city: "Ikeja",
                      postCode: "100002",
                      country: "Niger",
                    },
                    invoiceData: {
                      invoiceDate: "29 March, 2021",
                      paymentTerms: "30 Days",
                      projectDescription: "Design of school",
                    },
                    itemList: [
                      {
                        itemName: "Laptop",
                        quantity: "4",
                        price: "#23,000",
                      },
                      {
                        itemName: "Laptop school bag",
                        quantity: "4",
                        price: "#1,300",
                      },
                    ],
                  },
                  {
                      billFrom: {
                        streetAddress: "8, Moses Kolade street.",
                        city: "Adiyan",
                        postCode: "100001",
                        country: "Nigeria",
                      },
                      billTo: {
                        clientName: "Ayo Ibosiola",
                        clientEmail: "ayomideibosiola100@gmail.com",
                        streetAddress: "3, Bamboye.",
                        city: "Ikeja",
                        postCode: "100002",
                        country: "Niger",
                      },
                      invoiceData: {
                        invoiceDate: "29 March, 2021",
                        paymentTerms: "30 Days",
                        projectDescription: "Design of school",
                      },
                      itemList: [
                        {
                          itemName: "Laptop",
                          quantity: "4",
                          price: "#23,000",
                        },
                        {
                          itemName: "Laptop school bag",
                          quantity: "4",
                          price: "#1,300",
                        },
                      ],
                    },
                    {
                      billFrom: {
                        streetAddress: "8, Moses Kolade street.",
                        city: "Adiyan",
                        postCode: "100001",
                        country: "Nigeria",
                      },
                      billTo: {
                        clientName: "Ayo Ibosiola",
                        clientEmail: "ayomideibosiola100@gmail.com",
                        streetAddress: "3, Bamboye.",
                        city: "Ikeja",
                        postCode: "100002",
                        country: "Niger",
                      },
                      invoiceData: {
                        invoiceDate: "29 March, 2021",
                        paymentTerms: "30 Days",
                        projectDescription: "Design of school",
                      },
                      itemList: [
                        {
                          itemName: "Laptop",
                          quantity: "4",
                          price: "#23,000",
                        },
                        {
                          itemName: "Laptop school bag",
                          quantity: "4",
                          price: "#1,300",
                        },
                      ],
                    },
                ],
              },
              {
                billFrom: {
                  streetAddress: "8, Moses Kolade street.",
                  city: "Adiyan",
                  postCode: "100001",
                  country: "Nigeria",
                },
                billTo: {
                  clientName: "Ayo Ibosiola",
                  clientEmail: "ayomideibosiola100@gmail.com",
                  streetAddress: "3, Bamboye.",
                  city: "Ikeja",
                  postCode: "100002",
                  country: "Niger",
                },
                invoiceData: {
                  invoiceDate: "29 March, 2021",
                  paymentTerms: "30 Days",
                  projectDescription: "Design of school",
                },
                itemList: [
                  {
                    itemName: "Laptop",
                    quantity: "4",
                    price: "#23,000",
                  },
                  {
                    itemName: "Laptop school bag",
                    quantity: "4",
                    price: "#1,300",
                  },
                ],
              },
              {
                  billFrom: {
                    streetAddress: "8, Moses Kolade street.",
                    city: "Adiyan",
                    postCode: "100001",
                    country: "Nigeria",
                  },
                  billTo: {
                    clientName: "Ayo Ibosiola",
                    clientEmail: "ayomideibosiola100@gmail.com",
                    streetAddress: "3, Bamboye.",
                    city: "Ikeja",
                    postCode: "100002",
                    country: "Niger",
                  },
                  invoiceData: {
                    invoiceDate: "29 March, 2021",
                    paymentTerms: "30 Days",
                    projectDescription: "Design of school",
                  },
                  itemList: [
                    {
                      itemName: "Laptop",
                      quantity: "4",
                      price: "#23,000",
                    },
                    {
                      itemName: "Laptop school bag",
                      quantity: "4",
                      price: "#1,300",
                    },
                  ],
                },
                {
                  billFrom: {
                    streetAddress: "8, Moses Kolade street.",
                    city: "Adiyan",
                    postCode: "100001",
                    country: "Nigeria",
                  },
                  billTo: {
                    clientName: "Ayo Ibosiola",
                    clientEmail: "ayomideibosiola100@gmail.com",
                    streetAddress: "3, Bamboye.",
                    city: "Ikeja",
                    postCode: "100002",
                    country: "Niger",
                  },
                  invoiceData: {
                    invoiceDate: "29 March, 2021",
                    paymentTerms: "30 Days",
                    projectDescription: "Design of school",
                  },
                  itemList: [
                    {
                      itemName: "Laptop",
                      quantity: "4",
                      price: "#23,000",
                    },
                    {
                      itemName: "Laptop school bag",
                      quantity: "4",
                      price: "#1,300",
                    },
                  ],
                },
                {
                    billFrom: {
                      streetAddress: "8, Moses Kolade street.",
                      city: "Adiyan",
                      postCode: "100001",
                      country: "Nigeria",
                    },
                    billTo: {
                      clientName: "Ayo Ibosiola",
                      clientEmail: "ayomideibosiola100@gmail.com",
                      streetAddress: "3, Bamboye.",
                      city: "Ikeja",
                      postCode: "100002",
                      country: "Niger",
                    },
                    invoiceData: {
                      invoiceDate: "29 March, 2021",
                      paymentTerms: "30 Days",
                      projectDescription: "Design of school",
                    },
                    itemList: [
                      {
                        itemName: "Laptop",
                        quantity: "4",
                        price: "#23,000",
                      },
                      {
                        itemName: "Laptop school bag",
                        quantity: "4",
                        price: "#1,300",
                      },
                    ],
                  },
                  {
                      billFrom: {
                        streetAddress: "8, Moses Kolade street.",
                        city: "Adiyan",
                        postCode: "100001",
                        country: "Nigeria",
                      },
                      billTo: {
                        clientName: "Ayo Ibosiola",
                        clientEmail: "ayomideibosiola100@gmail.com",
                        streetAddress: "3, Bamboye.",
                        city: "Ikeja",
                        postCode: "100002",
                        country: "Niger",
                      },
                      invoiceData: {
                        invoiceDate: "29 March, 2021",
                        paymentTerms: "30 Days",
                        projectDescription: "Design of school",
                      },
                      itemList: [
                        {
                          itemName: "Laptop",
                          quantity: "4",
                          price: "#23,000",
                        },
                        {
                          itemName: "Laptop school bag",
                          quantity: "4",
                          price: "#1,300",
                        },
                      ],
                    },
                    {
                      billFrom: {
                        streetAddress: "8, Moses Kolade street.",
                        city: "Adiyan",
                        postCode: "100001",
                        country: "Nigeria",
                      },
                      billTo: {
                        clientName: "Ayo Ibosiola",
                        clientEmail: "ayomideibosiola100@gmail.com",
                        streetAddress: "3, Bamboye.",
                        city: "Ikeja",
                        postCode: "100002",
                        country: "Niger",
                      },
                      invoiceData: {
                        invoiceDate: "29 March, 2021",
                        paymentTerms: "30 Days",
                        projectDescription: "Design of school",
                      },
                      itemList: [
                        {
                          itemName: "Laptop",
                          quantity: "4",
                          price: "#23,000",
                        },
                        {
                          itemName: "Laptop school bag",
                          quantity: "4",
                          price: "#1,300",
                        },
                      ],
                    },
                    {
                        billFrom: {
                          streetAddress: "8, Moses Kolade street.",
                          city: "Adiyan",
                          postCode: "100001",
                          country: "Nigeria",
                        },
                        billTo: {
                          clientName: "Ayo Ibosiola",
                          clientEmail: "ayomideibosiola100@gmail.com",
                          streetAddress: "3, Bamboye.",
                          city: "Ikeja",
                          postCode: "100002",
                          country: "Niger",
                        },
                        invoiceData: {
                          invoiceDate: "29 March, 2021",
                          paymentTerms: "30 Days",
                          projectDescription: "Design of school",
                        },
                        itemList: [
                          {
                            itemName: "Laptop",
                            quantity: "4",
                            price: "#23,000",
                          },
                          {
                            itemName: "Laptop school bag",
                            quantity: "4",
                            price: "#1,300",
                          },
                        ],
                      },
                      {
                          billFrom: {
                            streetAddress: "8, Moses Kolade street.",
                            city: "Adiyan",
                            postCode: "100001",
                            country: "Nigeria",
                          },
                          billTo: {
                            clientName: "Ayo Ibosiola",
                            clientEmail: "ayomideibosiola100@gmail.com",
                            streetAddress: "3, Bamboye.",
                            city: "Ikeja",
                            postCode: "100002",
                            country: "Niger",
                          },
                          invoiceData: {
                            invoiceDate: "29 March, 2021",
                            paymentTerms: "30 Days",
                            projectDescription: "Design of school",
                          },
                          itemList: [
                            {
                              itemName: "Laptop",
                              quantity: "4",
                              price: "#23,000",
                            },
                            {
                              itemName: "Laptop school bag",
                              quantity: "4",
                              price: "#1,300",
                            },
                          ],
                        },
                        {
                          billFrom: {
                            streetAddress: "8, Moses Kolade street.",
                            city: "Adiyan",
                            postCode: "100001",
                            country: "Nigeria",
                          },
                          billTo: {
                            clientName: "Ayo Ibosiola",
                            clientEmail: "ayomideibosiola100@gmail.com",
                            streetAddress: "3, Bamboye.",
                            city: "Ikeja",
                            postCode: "100002",
                            country: "Niger",
                          },
                          invoiceData: {
                            invoiceDate: "29 March, 2021",
                            paymentTerms: "30 Days",
                            projectDescription: "Design of school",
                          },
                          itemList: [
                            {
                              itemName: "Laptop",
                              quantity: "4",
                              price: "#23,000",
                            },
                            {
                              itemName: "Laptop school bag",
                              quantity: "4",
                              price: "#1,300",
                            },
                          ],
                        },
                        {
                            billFrom: {
                              streetAddress: "8, Moses Kolade street.",
                              city: "Adiyan",
                              postCode: "100001",
                              country: "Nigeria",
                            },
                            billTo: {
                              clientName: "Ayo Ibosiola",
                              clientEmail: "ayomideibosiola100@gmail.com",
                              streetAddress: "3, Bamboye.",
                              city: "Ikeja",
                              postCode: "100002",
                              country: "Niger",
                            },
                            invoiceData: {
                              invoiceDate: "29 March, 2021",
                              paymentTerms: "30 Days",
                              projectDescription: "Design of school",
                            },
                            itemList: [
                              {
                                itemName: "Laptop",
                                quantity: "4",
                                price: "#23,000",
                              },
                              {
                                itemName: "Laptop school bag",
                                quantity: "4",
                                price: "#1,300",
                              },
                            ],
                          },
                          {
                              billFrom: {
                                streetAddress: "8, Moses Kolade street.",
                                city: "Adiyan",
                                postCode: "100001",
                                country: "Nigeria",
                              },
                              billTo: {
                                clientName: "Ayo Ibosiola",
                                clientEmail: "ayomideibosiola100@gmail.com",
                                streetAddress: "3, Bamboye.",
                                city: "Ikeja",
                                postCode: "100002",
                                country: "Niger",
                              },
                              invoiceData: {
                                invoiceDate: "29 March, 2021",
                                paymentTerms: "30 Days",
                                projectDescription: "Design of school",
                              },
                              itemList: [
                                {
                                  itemName: "Laptop",
                                  quantity: "4",
                                  price: "#23,000",
                                },
                                {
                                  itemName: "Laptop school bag",
                                  quantity: "4",
                                  price: "#1,300",
                                },
                              ],
                            },
                            {
                              billFrom: {
                                streetAddress: "8, Moses Kolade street.",
                                city: "Adiyan",
                                postCode: "100001",
                                country: "Nigeria",
                              },
                              billTo: {
                                clientName: "Ayo Ibosiola",
                                clientEmail: "ayomideibosiola100@gmail.com",
                                streetAddress: "3, Bamboye.",
                                city: "Ikeja",
                                postCode: "100002",
                                country: "Niger",
                              },
                              invoiceData: {
                                invoiceDate: "29 March, 2021",
                                paymentTerms: "30 Days",
                                projectDescription: "Design of school",
                              },
                              itemList: [
                                {
                                  itemName: "Laptop",
                                  quantity: "4",
                                  price: "#23,000",
                                },
                                {
                                  itemName: "Laptop school bag",
                                  quantity: "4",
                                  price: "#1,300",
                                },
                              ],
                            },
                            {
                                billFrom: {
                                  streetAddress: "8, Moses Kolade street.",
                                  city: "Adiyan",
                                  postCode: "100001",
                                  country: "Nigeria",
                                },
                                billTo: {
                                  clientName: "Ayo Ibosiola",
                                  clientEmail: "ayomideibosiola100@gmail.com",
                                  streetAddress: "3, Bamboye.",
                                  city: "Ikeja",
                                  postCode: "100002",
                                  country: "Niger",
                                },
                                invoiceData: {
                                  invoiceDate: "29 March, 2021",
                                  paymentTerms: "30 Days",
                                  projectDescription: "Design of school",
                                },
                                itemList: [
                                  {
                                    itemName: "Laptop",
                                    quantity: "4",
                                    price: "#23,000",
                                  },
                                  {
                                    itemName: "Laptop school bag",
                                    quantity: "4",
                                    price: "#1,300",
                                  },
                                ],
                              },
                              {
                                  billFrom: {
                                    streetAddress: "8, Moses Kolade street.",
                                    city: "Adiyan",
                                    postCode: "100001",
                                    country: "Nigeria",
                                  },
                                  billTo: {
                                    clientName: "Ayo Ibosiola",
                                    clientEmail: "ayomideibosiola100@gmail.com",
                                    streetAddress: "3, Bamboye.",
                                    city: "Ikeja",
                                    postCode: "100002",
                                    country: "Niger",
                                  },
                                  invoiceData: {
                                    invoiceDate: "29 March, 2021",
                                    paymentTerms: "30 Days",
                                    projectDescription: "Design of school",
                                  },
                                  itemList: [
                                    {
                                      itemName: "Laptop",
                                      quantity: "4",
                                      price: "#23,000",
                                    },
                                    {
                                      itemName: "Laptop school bag",
                                      quantity: "4",
                                      price: "#1,300",
                                    },
                                  ],
                                },
                                {
                                  billFrom: {
                                    streetAddress: "8, Moses Kolade street.",
                                    city: "Adiyan",
                                    postCode: "100001",
                                    country: "Nigeria",
                                  },
                                  billTo: {
                                    clientName: "Ayo Ibosiola",
                                    clientEmail: "ayomideibosiola100@gmail.com",
                                    streetAddress: "3, Bamboye.",
                                    city: "Ikeja",
                                    postCode: "100002",
                                    country: "Niger",
                                  },
                                  invoiceData: {
                                    invoiceDate: "29 March, 2021",
                                    paymentTerms: "30 Days",
                                    projectDescription: "Design of school",
                                  },
                                  itemList: [
                                    {
                                      itemName: "Laptop",
                                      quantity: "4",
                                      price: "#23,000",
                                    },
                                    {
                                      itemName: "Laptop school bag",
                                      quantity: "4",
                                      price: "#1,300",
                                    },
                                  ],
                                },
                                {
                                    billFrom: {
                                      streetAddress: "8, Moses Kolade street.",
                                      city: "Adiyan",
                                      postCode: "100001",
                                      country: "Nigeria",
                                    },
                                    billTo: {
                                      clientName: "Ayo Ibosiola",
                                      clientEmail: "ayomideibosiola100@gmail.com",
                                      streetAddress: "3, Bamboye.",
                                      city: "Ikeja",
                                      postCode: "100002",
                                      country: "Niger",
                                    },
                                    invoiceData: {
                                      invoiceDate: "29 March, 2021",
                                      paymentTerms: "30 Days",
                                      projectDescription: "Design of school",
                                    },
                                    itemList: [
                                      {
                                        itemName: "Laptop",
                                        quantity: "4",
                                        price: "#23,000",
                                      },
                                      {
                                        itemName: "Laptop school bag",
                                        quantity: "4",
                                        price: "#1,300",
                                      },
                                    ],
                                  },
                                  {
                                      billFrom: {
                                        streetAddress: "8, Moses Kolade street.",
                                        city: "Adiyan",
                                        postCode: "100001",
                                        country: "Nigeria",
                                      },
                                      billTo: {
                                        clientName: "Ayo Ibosiola",
                                        clientEmail: "ayomideibosiola100@gmail.com",
                                        streetAddress: "3, Bamboye.",
                                        city: "Ikeja",
                                        postCode: "100002",
                                        country: "Niger",
                                      },
                                      invoiceData: {
                                        invoiceDate: "29 March, 2021",
                                        paymentTerms: "30 Days",
                                        projectDescription: "Design of school",
                                      },
                                      itemList: [
                                        {
                                          itemName: "Laptop",
                                          quantity: "4",
                                          price: "#23,000",
                                        },
                                        {
                                          itemName: "Laptop school bag",
                                          quantity: "4",
                                          price: "#1,300",
                                        },
                                      ],
                                    },
                                    {
                                      billFrom: {
                                        streetAddress: "8, Moses Kolade street.",
                                        city: "Adiyan",
                                        postCode: "100001",
                                        country: "Nigeria",
                                      },
                                      billTo: {
                                        clientName: "Ayo Ibosiola",
                                        clientEmail: "ayomideibosiola100@gmail.com",
                                        streetAddress: "3, Bamboye.",
                                        city: "Ikeja",
                                        postCode: "100002",
                                        country: "Niger",
                                      },
                                      invoiceData: {
                                        invoiceDate: "29 March, 2021",
                                        paymentTerms: "30 Days",
                                        projectDescription: "Design of school",
                                      },
                                      itemList: [
                                        {
                                          itemName: "Laptop",
                                          quantity: "4",
                                          price: "#23,000",
                                        },
                                        {
                                          itemName: "Laptop school bag",
                                          quantity: "4",
                                          price: "#1,300",
                                        },
                                      ],
                                    },
                                    {
                                        billFrom: {
                                          streetAddress: "8, Moses Kolade street.",
                                          city: "Adiyan",
                                          postCode: "100001",
                                          country: "Nigeria",
                                        },
                                        billTo: {
                                          clientName: "Ayo Ibosiola",
                                          clientEmail: "ayomideibosiola100@gmail.com",
                                          streetAddress: "3, Bamboye.",
                                          city: "Ikeja",
                                          postCode: "100002",
                                          country: "Niger",
                                        },
                                        invoiceData: {
                                          invoiceDate: "29 March, 2021",
                                          paymentTerms: "30 Days",
                                          projectDescription: "Design of school",
                                        },
                                        itemList: [
                                          {
                                            itemName: "Laptop",
                                            quantity: "4",
                                            price: "#23,000",
                                          },
                                          {
                                            itemName: "Laptop school bag",
                                            quantity: "4",
                                            price: "#1,300",
                                          },
                                        ],
                                      },
                                      {
                                          billFrom: {
                                            streetAddress: "8, Moses Kolade street.",
                                            city: "Adiyan",
                                            postCode: "100001",
                                            country: "Nigeria",
                                          },
                                          billTo: {
                                            clientName: "Ayo Ibosiola",
                                            clientEmail: "ayomideibosiola100@gmail.com",
                                            streetAddress: "3, Bamboye.",
                                            city: "Ikeja",
                                            postCode: "100002",
                                            country: "Niger",
                                          },
                                          invoiceData: {
                                            invoiceDate: "29 March, 2021",
                                            paymentTerms: "30 Days",
                                            projectDescription: "Design of school",
                                          },
                                          itemList: [
                                            {
                                              itemName: "Laptop",
                                              quantity: "4",
                                              price: "#23,000",
                                            },
                                            {
                                              itemName: "Laptop school bag",
                                              quantity: "4",
                                              price: "#1,300",
                                            },
                                          ],
                                        },
                                        {
                                          billFrom: {
                                            streetAddress: "8, Moses Kolade street.",
                                            city: "Adiyan",
                                            postCode: "100001",
                                            country: "Nigeria",
                                          },
                                          billTo: {
                                            clientName: "Ayo Ibosiola",
                                            clientEmail: "ayomideibosiola100@gmail.com",
                                            streetAddress: "3, Bamboye.",
                                            city: "Ikeja",
                                            postCode: "100002",
                                            country: "Niger",
                                          },
                                          invoiceData: {
                                            invoiceDate: "29 March, 2021",
                                            paymentTerms: "30 Days",
                                            projectDescription: "Design of school",
                                          },
                                          itemList: [
                                            {
                                              itemName: "Laptop",
                                              quantity: "4",
                                              price: "#23,000",
                                            },
                                            {
                                              itemName: "Laptop school bag",
                                              quantity: "4",
                                              price: "#1,300",
                                            },
                                          ],
                                        },
                                        {
                                            billFrom: {
                                              streetAddress: "8, Moses Kolade street.",
                                              city: "Adiyan",
                                              postCode: "100001",
                                              country: "Nigeria",
                                            },
                                            billTo: {
                                              clientName: "Ayo Ibosiola",
                                              clientEmail: "ayomideibosiola100@gmail.com",
                                              streetAddress: "3, Bamboye.",
                                              city: "Ikeja",
                                              postCode: "100002",
                                              country: "Niger",
                                            },
                                            invoiceData: {
                                              invoiceDate: "29 March, 2021",
                                              paymentTerms: "30 Days",
                                              projectDescription: "Design of school",
                                            },
                                            itemList: [
                                              {
                                                itemName: "Laptop",
                                                quantity: "4",
                                                price: "#23,000",
                                              },
                                              {
                                                itemName: "Laptop school bag",
                                                quantity: "4",
                                                price: "#1,300",
                                              },
                                            ],
                                          },
                                          {
                                              billFrom: {
                                                streetAddress: "8, Moses Kolade street.",
                                                city: "Adiyan",
                                                postCode: "100001",
                                                country: "Nigeria",
                                              },
                                              billTo: {
                                                clientName: "Ayo Ibosiola",
                                                clientEmail: "ayomideibosiola100@gmail.com",
                                                streetAddress: "3, Bamboye.",
                                                city: "Ikeja",
                                                postCode: "100002",
                                                country: "Niger",
                                              },
                                              invoiceData: {
                                                invoiceDate: "29 March, 2021",
                                                paymentTerms: "30 Days",
                                                projectDescription: "Design of school",
                                              },
                                              itemList: [
                                                {
                                                  itemName: "Laptop",
                                                  quantity: "4",
                                                  price: "#23,000",
                                                },
                                                {
                                                  itemName: "Laptop school bag",
                                                  quantity: "4",
                                                  price: "#1,300",
                                                },
                                              ],
                                            },
                                            {
                                              billFrom: {
                                                streetAddress: "8, Moses Kolade street.",
                                                city: "Adiyan",
                                                postCode: "100001",
                                                country: "Nigeria",
                                              },
                                              billTo: {
                                                clientName: "Ayo Ibosiola",
                                                clientEmail: "ayomideibosiola100@gmail.com",
                                                streetAddress: "3, Bamboye.",
                                                city: "Ikeja",
                                                postCode: "100002",
                                                country: "Niger",
                                              },
                                              invoiceData: {
                                                invoiceDate: "29 March, 2021",
                                                paymentTerms: "30 Days",
                                                projectDescription: "Design of school",
                                              },
                                              itemList: [
                                                {
                                                  itemName: "Laptop",
                                                  quantity: "4",
                                                  price: "#23,000",
                                                },
                                                {
                                                  itemName: "Laptop school bag",
                                                  quantity: "4",
                                                  price: "#1,300",
                                                },
                                              ],
                                            },
                                            {
              billFrom: {
                streetAddress: "8, Moses Kolade street.",
                city: "Adiyan",
                postCode: "100001",
                country: "Nigeria",
              },
              billTo: {
                clientName: "Ayo Ibosiola",
                clientEmail: "ayomideibosiola100@gmail.com",
                streetAddress: "3, Bamboye.",
                city: "Ikeja",
                postCode: "100002",
                country: "Niger",
              },
              invoiceData: {
                invoiceDate: "29 March, 2021",
                paymentTerms: "30 Days",
                projectDescription: "Design of school",
              },
              itemList: [
                {
                  itemName: "Laptop",
                  quantity: "4",
                  price: "#23,000",
                },
                {
                  itemName: "Laptop school bag",
                  quantity: "4",
                  price: "#1,300",
                },
              ],
            },
            {
                billFrom: {
                  streetAddress: "8, Moses Kolade street.",
                  city: "Adiyan",
                  postCode: "100001",
                  country: "Nigeria",
                },
                billTo: {
                  clientName: "Ayo Ibosiola",
                  clientEmail: "ayomideibosiola100@gmail.com",
                  streetAddress: "3, Bamboye.",
                  city: "Ikeja",
                  postCode: "100002",
                  country: "Niger",
                },
                invoiceData: {
                  invoiceDate: "29 March, 2021",
                  paymentTerms: "30 Days",
                  projectDescription: "Design of school",
                },
                itemList: [
                  {
                    itemName: "Laptop",
                    quantity: "4",
                    price: "#23,000",
                  },
                  {
                    itemName: "Laptop school bag",
                    quantity: "4",
                    price: "#1,300",
                  },
                ],
              },
              {
                billFrom: {
                  streetAddress: "8, Moses Kolade street.",
                  city: "Adiyan",
                  postCode: "100001",
                  country: "Nigeria",
                },
                billTo: {
                  clientName: "Ayo Ibosiola",
                  clientEmail: "ayomideibosiola100@gmail.com",
                  streetAddress: "3, Bamboye.",
                  city: "Ikeja",
                  postCode: "100002",
                  country: "Niger",
                },
                invoiceData: {
                  invoiceDate: "29 March, 2021",
                  paymentTerms: "30 Days",
                  projectDescription: "Design of school",
                },
                itemList: [
                  {
                    itemName: "Laptop",
                    quantity: "4",
                    price: "#23,000",
                  },
                  {
                    itemName: "Laptop school bag",
                    quantity: "4",
                    price: "#1,300",
                  },
                ],
              },
          ],
          
    
       }
  },
  mutations: {
      setInvoiceDatabase(state, payload) {
          state.invoiceDatabase.push({payload})
      }

  }
})

export default store;