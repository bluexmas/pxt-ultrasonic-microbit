//% color=50 weight=80
//% icon="\uf1e9"
namespace Ultrasonic {

	//% block="initialization (%trigPin, %echoPin)"
	//% blockId=ultrasonic_init shim=Ultrasonic::init
	export function init(trigPin : Pins, echoPin : Pins) : void {
		//shim
		return;
	}

	//% block="Distance(cm)"
	//% blockId=ultrasonic_get_dist_cm shim=Ultrasonic::get_dist_cm
	export function get_dist_cm() : number {
		//shim
		return 0;
	}

}
