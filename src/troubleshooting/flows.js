export const flows = {
  "Robot not moving": {
    start: "q1",
    nodes: {
      q1: {
        question: "Is the battery connected and powered ON?",
        options: { yes: "q2", no: "s1" }
      },
      q2: {
        question: "Are motor connections properly wired?",
        options: { yes: "q3", no: "s2" }
      },
      q3: {
        question: "Is the motor driver (L293D) getting power?",
        options: { yes: "s3", no: "s4" }
      },
      s1: {
        solution: "Connect and charge the Li-Ion battery properly."
      },
      s2: {
        solution: "Fix motor wiring connections."
      },
      s3: {
        solution: "Check Arduino signals or motor driver output."
      },
      s4: {
        solution: "Ensure proper power supply to motor driver."
      }
    }
  },

  "Line follower not detecting line": {
    start: "q1",
    nodes: {
      q1: {
        question: "Is the sensor calibrated?",
        options: { yes: "q2", no: "s1" }
      },
      q2: {
        question: "Is the sensor placed correctly over the line?",
        options: { yes: "q3", no: "s2" }
      },
      q3: {
        question: "Is the surface contrast clear (black/white)?",
        options: { yes: "s3", no: "s4" }
      },
      s1: {
        solution: "Recalibrate the IR sensors using calibration mode."
      },
      s2: {
        solution: "Adjust sensor position closer to the surface."
      },
      s3: {
        solution: "Check sensor wiring or threshold values."
      },
      s4: {
        solution: "Use a clearer contrast surface for detection."
      }
    }
  },

  "Bluetooth not connecting": {
    start: "q1",
    nodes: {
      q1: {
        question: "Is the Bluetooth module powered ON?",
        options: { yes: "q2", no: "s1" }
      },
      q2: {
        question: "Is the device paired correctly?",
        options: { yes: "q3", no: "s2" }
      },
      q3: {
        question: "Are TX and RX connections correct?",
        options: { yes: "s3", no: "s4" }
      },
      s1: {
        solution: "Ensure Bluetooth module is powered properly."
      },
      s2: {
        solution: "Pair the device correctly from your phone."
      },
      s3: {
        solution: "Check baud rate and Arduino communication."
      },
      s4: {
        solution: "Fix TX-RX wiring connections."
      }
    }
  },

  "Arduino resetting randomly": {
    start: "q1",
    nodes: {
      q1: {
        question: "Does reset happen when motors change direction?",
        options: { yes: "s1", no: "q2" }
      },
      q2: {
        question: "Is Arduino powered from the same battery as motors?",
        options: { yes: "s2", no: "s3" }
      },
      s1: {
        solution: "This is likely brownout due to reverse current. Add capacitors across motors."
      },
      s2: {
        solution: "Use separate power supply or voltage regulator for Arduino."
      },
      s3: {
        solution: "Check wiring and ensure stable voltage supply."
      }
    }
  },

  "Motors running slowly": {
    start: "q1",
    nodes: {
      q1: {
        question: "Is the battery fully charged?",
        options: { yes: "q2", no: "s1" }
      },
      q2: {
        question: "Is there mechanical resistance in wheels?",
        options: { yes: "s2", no: "s3" }
      },
      s1: {
        solution: "Charge the Li-Ion battery fully."
      },
      s2: {
        solution: "Check for obstructions or gear issues in BO motors."
      },
      s3: {
        solution: "Check motor driver output and PWM signals."
      }
    }
  }
};