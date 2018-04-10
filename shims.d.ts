// Auto-generated. Do not edit.

declare namespace Ultrasonic {
	
	  /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connect ir receiver to %pin" shim=IR::init
    function init(trigPin: Pins, pin: echoPin): void;
    
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
