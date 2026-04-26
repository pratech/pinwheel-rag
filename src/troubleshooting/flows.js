export const flows = {
  "robot_not_moving": {
    start: "q1",
    nodes: {
      q1: {
        question: "Is the battery connected and powered ON?",
        options: {
          yes: "q2",
          no: "fix_battery"
        }
      },
      q2: {
        question: "Are the motors spinning at all?",
        options: {
          yes: "q3",
          no: "fix_motor_driver"
        }
      },
      q3: {
        question: "Is the robot receiving commands (Bluetooth/app)?",
        options: {
          yes: "fix_mechanical",
          no: "fix_bluetooth"
        }
      },

      // Fix nodes
      fix_battery: {
        solution: "Connect the battery properly and ensure sufficient charge."
      },
      fix_motor_driver: {
        solution: "Check L298N connections and motor wiring."
      },
      fix_bluetooth: {
        solution: "Verify HC-05 connections and pairing."
      },
      fix_mechanical: {
        solution: "Check for physical obstruction or wheel alignment issues."
      }
    }
  }
};