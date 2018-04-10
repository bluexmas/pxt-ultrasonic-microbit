// Auto-generated. Do not edit.

declare namespace Ultrasonic {
	
	  /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% blockId=radio_datagram_send_value block="radio send|value %trigPin|= %echoPin" blockGap=8 shim=radio::sendValue
    function init(trigPin: Pins, echoPin: Pins): void;
    
		/**
	  * Generates the trigger pulse of 10us on the trigger PIN.
	  */
	  //% blockId=ultrasonic_start
	  //% block="Ultrasonic Start"
    function start(): void;

	  /**
	  * Return the distance from obstacle in cm
	  */
	  //% blockId=ultrasonic_get_dist_cm
	  //% block="Return the distance from obstacle in cm"
    function get_dist_cm(): number;
}

// Auto-generated. Do not edit. Really.
