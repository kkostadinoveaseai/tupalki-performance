export function getCustomerConfirmationHTML(contact) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Благодарим Ви за запитването!</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #0A0A0A; font-family: Arial, Helvetica, sans-serif; color: #FFFFFF; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #0A0A0A;">
          <tr>
            <td align="center" style="padding: 30px 10px;">
              <!-- Container Table -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #141414; border: 1px solid #262626; border-radius: 12px; overflow: hidden;">
                
                <!-- Logo Header -->
                <tr>
                  <td align="center" style="padding: 35px 20px 20px 20px; border-bottom: 1px solid #262626;">
                    <h2 style="margin: 0; color: #E53935; font-size: 22px; font-weight: 900; letter-spacing: 3px; font-style: italic; text-transform: uppercase;">
                      TUPALKI PERFORMANCE
                    </h2>
                  </td>
                </tr>

                <!-- Content Area -->
                <tr>
                  <td style="padding: 40px 30px;">
                    
                    <!-- Main greeting and introduction -->
                    <h1 style="margin: 0 0 15px 0; color: #FFFFFF; font-size: 26px; font-weight: 800; tracking: -0.5px;">
                      Благодарим Ви, <span style="color: #E53935;">${contact.name}</span>!
                    </h1>
                    <p style="margin: 0 0 30px 0; color: #A3A3A3; font-size: 15px; line-height: 1.6;">
                      Получихме Вашето запитване за чип тунинг на <strong style="color: #FFFFFF;">${contact.carInfo}</strong>. Нашите софтуерни инженери вече анализират данните за Вашия автомобил. Наш специалист ще се свърже с Вас в рамките на 24 часа.
                    </p>

                    <!-- "Какво следва" Section -->
                    <h3 style="margin: 0 0 20px 0; color: #E53935; font-size: 14px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; border-bottom: 1px solid #262626; padding-bottom: 8px;">
                      КАКВО СЛЕДВА:
                    </h3>

                    <!-- Table-based Grid for steps -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 35px;">
                      <!-- Step 1 -->
                      <tr>
                        <td style="padding-bottom: 15px; vertical-align: top;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #1A1A1A; border: 1px solid #262626; border-radius: 8px;">
                            <tr>
                              <td width="55" align="center" style="font-size: 20px; font-weight: 900; color: #E53935; padding: 15px; background-color: #241212; border-radius: 8px 0 0 8px; border-right: 1px solid #262626;">
                                1
                              </td>
                              <td style="padding: 15px; color: #E0E0E0; font-size: 14px;">
                                <strong style="color: #FFFFFF; display: block; margin-bottom: 4px;">Преглед на запитването</strong>
                                Нашите специалисти ще анализират фабричните параметри на Вашия двигател.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- Step 2 -->
                      <tr>
                        <td style="padding-bottom: 15px; vertical-align: top;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #1A1A1A; border: 1px solid #262626; border-radius: 8px;">
                            <tr>
                              <td width="55" align="center" style="font-size: 20px; font-weight: 900; color: #E53935; padding: 15px; background-color: #241212; border-radius: 8px 0 0 8px; border-right: 1px solid #262626;">
                                2
                              </td>
                              <td style="padding: 15px; color: #E0E0E0; font-size: 14px;">
                                <strong style="color: #FFFFFF; display: block; margin-bottom: 4px;">Свързване с Вас</strong>
                                Ще се свържем с Вас за безплатна телефонна консултация и уточняване на удобен час.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Step 3 -->
                      <tr>
                        <td style="vertical-align: top;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #1A1A1A; border: 1px solid #262626; border-radius: 8px;">
                            <tr>
                              <td width="55" align="center" style="font-size: 20px; font-weight: 900; color: #E53935; padding: 15px; background-color: #241212; border-radius: 8px 0 0 8px; border-right: 1px solid #262626;">
                                3
                              </td>
                              <td style="padding: 15px; color: #E0E0E0; font-size: 14px;">
                                <strong style="color: #FFFFFF; display: block; margin-bottom: 4px;">Изготвяне на оферта</strong>
                                Индивидуално софтуерно решение за оптимална мощност, въртящ момент и икономия на гориво.
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- USP Banner -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #241212; border: 1px solid #E53935; border-radius: 8px; margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 20px; text-align: center; color: #FFFFFF; font-size: 15px; font-weight: bold; letter-spacing: 0.5px;">
                          🛡️ <span style="color: #E53935;">Единствените в България</span> с 14-дневна гаранция и безплатен тест на чип тунинг!
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Contact Info Footer -->
                <tr>
                  <td style="padding: 30px; background-color: #0F0F0F; border-top: 1px solid #262626; border-radius: 0 0 12px 12px; font-size: 13px; color: #A3A3A3;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="font-weight: bold; color: #FFFFFF; padding-bottom: 8px;">
                          Контакти:
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 4px;">
                          📞 <strong>Телефон:</strong> <a href="tel:+359888888888" style="color: #E53935; text-decoration: none;">+359 888 888 888</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 4px;">
                          ✉️ <strong>Имейл:</strong> <a href="mailto:info@tupalki-performance.bg" style="color: #E53935; text-decoration: none;">info@tupalki-performance.bg</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 20px;">
                          📍 <strong>Адрес:</strong> гр. София, ул. „Околовръстен път“ 140
                        </td>
                      </tr>
                      <tr>
                        <td style="font-size: 11px; color: #525252; border-top: 1px solid #262626; padding-top: 15px; text-align: center;">
                          Получихте този имейл, защото изпратихте запитване чрез <a href="https://tupalki-performance.bg" style="color: #737373; text-decoration: underline;">tupalki-performance.bg</a>.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}
