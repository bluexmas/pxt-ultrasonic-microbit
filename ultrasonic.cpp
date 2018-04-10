#include "pxt.h"
#include "hcsr04.h"

using namespace pxt;

enum class Pins{
  P0=  3,
  P1=  2,
  P2=  1,
  P3=  4,
  P4=  5,
  P5=  17,
  P6=  12,
  P7=  11,
  P8=  18,
  P9=  10,
  P10= 6,
  P11= 26,
  P12= 20,
  P13= 23,
  P14= 22,
  P15= 21,
  P16= 16,
  P19= 0,
  P20= 30
};

//% color=50 weight=80
//% icon="\uf1eb"
namespace Ultrasonic { 
	
	HCSR04 *hcsr04;
	
  /**
   * initialises local variablesssss
   */
  //% blockId=ultrasonic_init
  //% block="Ultrasonic send1|value %trigPin|= %echoPin" shim=Ultrasonic::init
  void init(Pins trigPin, Pins echoPin){
    hcsr04 = new HCSR04((PinName)trigPin, (PinName)echoPin);
  }
  
	/**
  * Generates the trigger pulse of 10us on the trigger PIN.
  */
  //% blockId=ultrasonic_start
  //% block="Ultrasonic Start"
  void start(void) {
    hcsr04->start();
  }
	
  /**
  * Return the distance from obstacle in cm
  */
  //% blockId=ultrasonic_get_dist_cm
  //% block="Return the distance from obstacle in cm"
  int get_dist_cm(void) {
    return hcsr04->get_dist_cm();
  }
}