// Auto-generated. Do not edit.

declare namespace ultrasonic {
	
	  /**
	   * initialises local variable
	   */
	  //% blockId=ultrasonic_init
	  //% block="TrigPin = %trigPin|th item in %echoPin|" shim=ultrasonic::init
	  //% parts=ultrasonic
    function init(trigPin: Pins, echoPin: Pins): void;
    
		/**
	  * Generates the trigger pulse of 10us on the trigger PIN.
	  */
	  //% blockId=ultrasonic_start
	  //% block="Ultrasonic Start" shim=ultrasonic::start
    function start(): void;

	  /**
	  * Return the distance from obstacle in cm
	  */
	  //% blockId=ultrasonic_get_dist_cm
	  //% block="Return the distance from obstacle in cm" shim=ultrasonic::get_dist_cm
    function get_dist_cm(): number;
}

// Auto-generated. Do not edit. Really.
