OLED.init(128, 64)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("Florin", "Bugh34R0sc4")
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "R4X1WRHEINK0KX9Z",
    Environment.ReadNoise(AnalogPin.P1),
    Environment.ReadLightIntensity(AnalogPin.P2),
    Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P3),
    Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C),
    Environment.octopus_BME280(Environment.BME280_state.BME280_humidity),
    Environment.octopus_BME280(Environment.BME280_state.BME280_pressure)
    )
    ESP8266_IoT.uploadData()
    basic.pause(2000)
})
basic.forever(function () {
    OLED.writeStringNewLine("Zgomotul: " + Environment.ReadNoise(AnalogPin.P1))
    OLED.writeStringNewLine("Lumina: " + Environment.ReadLightIntensity(AnalogPin.P2))
    OLED.writeStringNewLine("Distanta: " + Environment.sonarbit_distance(Environment.Distance_Unit.Distance_Unit_cm, DigitalPin.P3))
    OLED.writeStringNewLine("Temperatura: " + Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    OLED.writeStringNewLine("Umiditatea: " + Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
    OLED.writeStringNewLine("Presiunea: " + Environment.octopus_BME280(Environment.BME280_state.BME280_pressure))
    basic.pause(2000)
    OLED.clear()
})
