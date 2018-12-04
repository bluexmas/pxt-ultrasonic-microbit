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

namespace Ultrasonic {

	HCSR04 *hcsr04;

	//%
	void init(Pins trigPin, Pins echoPin) {
		//hcsr04 = new HCSR04(*pxt::getPin(trigPin), *pxt::getPin(echoPin);
		if (hcsr04 != NULL) delete hcsr04;
		hcsr04 = new HCSR04((PinName)trigPin, (PinName)echoPin);
	}

	//%
	void start(void) {
		//hcsr04->start();
	}

	//%
	int get_dist_cm(void) {
		return hcsr04->get_dist_cm();
	}

	//%
	int sum(int value1, int value2) {
		return value1 + value2;
	}
}