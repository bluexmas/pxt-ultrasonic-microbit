// Auto-generated. Do not edit.

declare namespace Ultrasonic {
	
	  /**
     * initialises local variablesssss
     */
    //% blockId=ultrasonic_init
    //% block="scroll image %sprite|with offset %frameoffset|and interval (ms) %delay" shim=Ultrasonic::init
    function init(trigPin: Pins, echoPin: Pins): void;
    
		/**
	  * Generates the trigger pulse of 10us on the trigger PIN.
	  */
	  //% blockId=ultrasonic_start
	  //% block="Ultrasonic Start" shim=Ultrasonic::start
    function start(): void;

	  /**
	  * Return the distance from obstacle in cm
	  */
	  //% blockId=ultrasonic_get_dist_cm
	  //% block="Return the distance from obstacle in cm" shim=Ultrasonic::get_dist_cm
    function get_dist_cm(): number;
}

// Auto-generated. Do not edit. Really.
