# Humanoid Quest Book

These are the objectives for the Spring/Summer 2025 term. Blog posts / documention should be added for each component, giving a **+2** to the section.

## Software

### Simulation

| Score | Description |
| --- | --- |
| 20/20 | Full system completed: Sensor Imitation, URDF Automation, Inverse Kinematics / PID Control, and initial Reinforcement Learning (RL) development. |
| 17/20 | All components complete except initial RL development. |
| 15/20 | Sensor Imitation, URDF Automation, and Inverse Kinematics / PID Control implemented; minor integration issues remain. |
| 10/20 | Sensor Imitation and URDF Automation complete, but no control components working yet. |
| 5/20| One or two major components completed; others in development. |
| 3/20| System partially started; most tasks still in development. |
| 0/20 | No visible progress made. |

### Behaviour

| Score /25 | Criteria |
| --- | --- |
| +10 | Movement API for Physical system
| | 5/5 Movement API with teleop and VR control implemented
| | 4/5 Movement API with teleop control implemented
| | 1-3/5 Movement API being developed
| | 0/5 No progress |
| +5 | Simulation API Integration
| | 5/5 Movement API is fully compatible with simulation
| | 3/5 Movement API currently being integrated with simulation
| | 0/5 No progress |
| +5 | Voxal Grid
| | 5/5 Implemented, integrated with controller
| | 3/5 Implemented, controller ingratiation needed
| | 1-3/5 Development |
| +5 | System localization / Initialization
| | 5/5 System implemented for getting initial state of the robot
| | 3/5 Manual system initialization  
| | 0/5 No progress |

### Perception

|  Score | Criteria |
| --- | --- |
| +5 | Object detection - inital basic object detection with 3D object detections|
| +5 | Keyboard specific objected detection and localization|
| +5 | Material Classification - inital development and research |
| +5 | Publishing filtered RGBD data |

### Interfacing

|  Score /20 | Criteria |
| --- | --- |
| +4 | CAN Package management system developed |
| +4 | Deployment System built to support system scaling |
| +4 | Sensor filtering / denoising implement |
| +4 | SLAM inital research|
| +4 | Sensor Drivers - Sensor drivers integrated, exposing sensor data to system |

### Embedded

| Score | Criteria |
| --- | --- |
| +5 | Sensor data collected and sent over CAN |
| +5 | Finger position data consistently maintained when running |
| +3 | Embedded devices run tension control loop with current draw feed back |
| +2 | Flashing STM32 firmware with ESP32 implemented |
| +3 | Move fingers to set positions via PID controls |
| +2 | Embedded devices process CAN messages |
| 0/20  | No progress |

## Hand

### Traincar:

| Criteria /20 | Requirements |
| --- | --- |
| +2 | Mechanical (Finger Actuation, Forearm integration/mounting) |
| +3 | Motor Control (Current Sense, Motor Movement, Magnetic Encoder feedback) |
| +2 | Communication (I2C, SPI, WIFI, CAN-FD) |
| 13/20 | Mechanical enclosure for PCB and motors designed & printed |
| 10/20 | Custom PCB created, ordered, shipped & delivered |
| 0/20 | No Progress |

### Mechanical:

| Criteria /20 | Requirements |
| --- | --- |
| 20/20 | Hand is fully integrated into software: URDF Created & CAD lines up w/ real life model |
| +4 | Hand is fully integrated with Forearm:
||4/4: Mechanically mounted & wires routed (no pinching!)
||3/4: Mechanically mounted |
| +4 | Palm meet all requirements:
||4/4: Fingers & Thumb are tested & integrated into palm
||2/4: Palm prototype is manufactured
||1/4: Palm prototype is designed
||0/4: No Progress |
| +4 | Fingers meet all requirements:
||4/4: Finger is integrated into palm
||3/4: Finger is tested
||2/4: Finger prototype is manufactured
||1/4: Finger prototype is designed
||0/4: No Progress |
| +4 | Thumb meet all requirements:
||4/4: Thumb is integrated into palm
||3/4: Thumb is tested
||2/4: Thumb prototype is manufactured
||1/4: Thumb prototype is designed
||0/4: No Progress |

### Sensors:

| Criteria /10 | Requirements |
| --- | --- |
| +4 | Sensors integrated into mechanical design |
| +4 | Sensors tested & integrated (able to communicate, test rig + procedure setup and used, integrated into traincar) |
| 2/10 | Sensors purchased |
| 1/10 | Sensor categories identified & researched |
| 0/10 | No Progress |

## Forearm

| Criteria /40 | Requirements |
| --- | --- |
| 40/40 | Forearm ready for Demo (finger & wrist actuation) |
| 35/40 | Forearm integrated & assembled with Hand |
| 30/40 | Forearm manufactured & assembled with Traincar |
| +2 | Wrist motors purchased |
| +8 | Forearm CAD + URDF Complete |
| +8 | Wrist CAD + URDF Complete |
| 2/50 | Design requirements & constraints specified (rated load, material/manufacturing method, DoF) |
| 0/50 | No Progress |

## Arm

| Criteria /15 | Requirements |
| --- | --- |
| +10 | Mechanical meets requirements:
||10/10 Mechanical Design finished with parts ordered
||8/10 Mechanical Design finished with final integrations left
||0-5/10 Mechanical Design in progress |
| +5 | Motors:
||5/5 Motors integrated with design
||3/5 Motors sourced and purchase
||2/5 Required motor specifications calculated  |
| 0/15 | No progress |

## Body
Building out the mount for the arms and the cameras

### Power Systems

| Criteria /10 | Requirements |
| --- | --- |
| 10/10 | Power system designed and built with interfaces with system components  |
| 7/10 | System design complete, parts purchased and installed |
| 5/10 | System design complete and part selection complete |
| 2/10 | System design complete |
| 0/10 | No progress |

### Mechanical

| Criteria /10 | Requirements |
| --- | --- |
| 10/10 | Body built with aesthetic design, integrated into system |
| 7/10 | Body built with mounts for system |
| 5/10 | Body design complete |
| 2/10 | Body design in progress |
| 0/10 | No progress |


---

## Scoring Template

| Quest Name              | Description                                                            | Due Date  | Score  |
|-------------------------|------------------------------------------------------------------------|-----------|--------|
| Software - Simulation   | One or two major components completed; others in development.          | 2025-08-31| 5/20   |
| Software - Behaviour    | No progress                                                            | 2025-08-31| 0/25   |
| Software - Perception   | Basic simulation up, simple RL models trained.                         | 2025-08-31| 5/20   |
| Software - Interfacing  | SLAM initial research begin                                            | 2025-08-31| 4/20   |
| Software - Embedded     | Sensors are integrated, free rtos setup                                | 2025-08-31| 7/20   |
| Hand - Traincar         | Custom PCB created, ordered, shipped & delivered                       | 2025-08-31| 10/20  |
| Hand - Mechanical       | Thumb, finger, palm prototype is manufactured                          | 2025-08-31| 6/20   |
| Hand - Sensors          | Sensor categories identified & researched                              | 2025-08-31| 1/10   |
| Forearm                 | Wrist motors purchased, initial CAD complete                           | 2025-08-31| 12/40  |
| Arm                     | Intitial prototype built                                               | 2025-08-31| 15/15  |
| Body - Power Systems    | Power system designed and built with interfaces with system components | 2025-08-31| 3/5    |
| Body - Mechanical       | Body built with aesthetic design, integrated into system               | 2025-08-31| 9/20   |

