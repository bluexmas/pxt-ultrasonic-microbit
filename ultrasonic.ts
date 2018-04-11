//% icon="\uf26c"
//% color="255" weight="90"
declare namespace ultrasonic {
	
	  /**
	   * initialises the ultrasonic
	   */
	  //% blockId=ultrasonic_init
	  //% block="Ultrasonic.Init(TrigPin = %trigPin|, EchoPin = %echoPin|" 
	  //% blockGap=8
    //% shim=ultrasonic::init
    function init(trigPin: Pins, echoPin: Pins): void;
    
		/**
	   * Generates the trigger pulse of 10us on the trigger PIN.
	   */
	  //% blockId=ultrasonic_start
	  //% block="Ultrasonic Start" 
	  //% blockGap=8
	  //% shim=ultrasonic::start
    function start(): void;

	  /**
	  * Return the distance from obstacle in cm
	  */
	  //% blockId=ultrasonic_get_dist_cm
	  //% async
	  //% block="Return the distance from obstacle in cm" 
	  //% blockGap=8
	  //% shim=ultrasonic::get_dist_cm
    function get_dist_cm(): number;
}
