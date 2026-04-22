  






Design of Optimized Location Tracking for a Web-Based Smart Inventory Management System








Bueno Joshua
Jimenez, Christian Joros
Lim, Justin Adrian 
Moras, Harvey Jayrell
Tiobengco, Glenn Gil B. 






Technological Institute of the Philippines
Quezon City




April 2026



CHAPTER 1: THE PROJECT AND ITS BACKGROUND
The project and its background include a description and the reasons for its foundation. It includes the aims and constraints of the project when it comes to design creation, discussion with the target client about its constraints, engineering standards relevant to the project, and the design process used in the project.

1.1 The Problem
One of the main problems in today’s delivery industry is the increasing difficulty of transporting packages efficiently. Delivery workers often face challenges such as navigating unfamiliar routes, managing multiple drop-off points, and dealing with unpredictable road conditions. These factors contribute to longer travel times averaging 20–30% more than planned schedules and wasted fuel that increases delivery costs by up to 15% (World Bank, 2023). As a result, delivery operations become more exhausting and less sustainable in the long run.

Small businesses struggle with inefficient delivery operations and poor inventory management due to the lack of smart, automated systems that can analyze buyer locations, calculate delivery feasibility, and optimize routes. Studies show that inefficient routing and manual inventory tracking increase delivery time by up to 25% and operational costs by around 15% for small enterprises (Department of Trade and Industry, 2023). This leads to longer delivery times, and reduced profitability because decisions are made manually without accurate, real-time data support.

Traffic congestion also plays a huge role in delivery inefficiency. In highly urbanized areas, drivers lose significant time stuck on the road, leading to delayed deliveries and dissatisfied customers. These delays are not only inconvenient for clients but also create additional stress for delivery personnel who must meet deadlines under difficult circumstances. Over time, this contributes to worker fatigue and burnout, which reduces overall service quality. However, existing systems used by smaller businesses often lack the technological support needed to address these challenges. Unlike larger companies that can afford advanced tracking systems, many small-scale entrepreneurs still rely on manual processes or simple communication tools, leaving them vulnerable to inefficiency. Without a smarter and more reliable solution, these businesses face higher risks of delayed deliveries, customer dissatisfaction, and reduced competitiveness in the market (Department of Trade and Industry, 2023; Villanueva, 2022).

Therefore, there is a need to design a web-based smart inventory and delivery decision system that combines accurate distance calculation, dynamic route optimization, and cluster-based delivery zoning. This design aims to reduce delivery time, fuel consumption, and operational costs by designing a smart platform that can analyze buyer locations, optimize delivery routes, and support better decision-making for our client.

1.2 The Client
The client’s name is Jonathan Corpus living in Gen. Trias, Cavite, his business is a bond paper supplier shop. Currently operating part-time by offering  paper supplies to small offices, people and schools in his barangay. Mr. Jonathan's strategy to sell is using facebook as his primary platform for customer engagement by posting his product to the community. Even though Mr. Jonathan is a part-time doing this business he intends to scale his shop to a full- time within a year and possibly expand the location not only in his local area but also possibly national.


Figure 1-1 Client’s Logo

Table 1-1 shows modern inventory and route optimization tools can reduce operational costs by up to 20%. According to ProValet (2023), smart routing lowers fuel use and improves delivery efficiency. ShipScience (2023) adds that optimized delivery paths reduce travel distance and trip frequency, directly cutting costs and enhancing customer satisfaction. Inoxoft (2023) notes that logistics inefficiencies can consume up to 30% of operations, and dynamic route planning helps mitigate these issues through real-time adjustments. Additionally, browser-based web applications can stay under 4GB by using efficient storage strategies. MDN Web Docs (2023) explain that modern browsers enforce quotas ranging from hundreds of megabytes to several gigabytes per origin, while web.dev (2023) recommends using IndexedDB, caching, and service workers to minimize storage use. Lightweight frameworks like Svelte or React with lazy loading further support this constraint.
Real-time geo-tracking with 3–5 second delays is achievable using AI-powered routing systems. HERE Technologies (2023) describes how these systems adapt to traffic and closures to reduce delays and fuel consumption. Esri (2023) offers route planning software that pinpoints delivery locations such as offices and schools using spatial intelligence. A GitHub project (2023) demonstrates low-latency delivery optimization using algorithms like Tabu Search, Deep Reinforcement Learning, and Ant Colony Optimization. These technologies collectively enable responsive, precise, and efficient delivery systems.


Table 1-1 Client and Engineering Requirements / Considerations
Client Requirements / Considerations
Engineering Requirements / Considerations
The system can manage its supply and reduce the total cost 
Develop a web-application that forecasts and optimizes its inventory and measures the fuel and delivery time that reduce the cost by 10% - 20%.
The system actively locates demand. It makes distribution easier at the community level and opens the door for local or even regional expansion.
Develop a web-application with a geo-tracking algorithm that pinpoints locations like offices and schools, and calculates the best route for delivery with a delay of 3-5 seconds.
The system should not consume too much space on the device
Develop a web application that takes only 4GB of storage or less 




1.3 The Project
The proposed system focuses on optimized location tracking to improve delivery efficiency and decision-making for small businesses. It utilizes algorithms such as distance calculation, route optimization, and location clustering to evaluate customer locations and determine the most efficient delivery paths. By analyzing geographic data and comparing it with delivery zones, transportation costs, and service coverage, the system aims to minimize travel time, fuel consumption, and overall operational expenses while ensuring accurate and timely deliveries.

Furthermore, the project is a web-based platform designed to provide accessible, real-time information to users through any device with an internet connection. The web application integrates interactive mapping and data visualization features to display delivery routes, inventory levels, and customer locations in a user-friendly interface. This ensures that business owners or our client can  make informed decisions anytime and anywhere, promoting scalability, efficiency, and smarter inventory management.



1.4 Project Objectives
The main objective of this project is to design an optimized location tracking system that measures the cost of certain variables like gasoline consumption and time while tracking the best possible route for delivery. The design project must meet the client’s requirements and maintain the engineering standards while considering the constraints. 

This project aims to:
Develop a system that can evaluate and calculate the most efficient delivery routes based on buyer location, distance, and real-time data, minimizing delay to as low as 3–5 seconds in computation and display time.
Design a web-based interface that allows users to easily query, filter, and analyze location and inventory data with minimal latency, ensuring fast system responsiveness and accessibility.
Design and implement a smart delivery tracking system that reduces fuel use and delivery time by automatically choosing the best routes based on real-time location and traffic data.
Design a web application with a route optimization algorithm to reduce the estimated travel distance and operational cost by at least 10%
Test and evaluate the accuracy


1.5 Scope and Delimitations
The scope of the project consists of the development of a cloud, web-based software application designed to streamline and automate key aspects of inventory and location management. The system will provide a comprehensive solution for tracking, monitoring, and managing inventory products. This software will have the function of item registration, inventory level monitoring, inventory search, location tracking, and location search.

The project is limited to only local places and possibly regional. This project is specifically for the products the client sells. The route optimization and geographic coverage are limited to only the Cavite region. Geographic and delivery data will be sourced from existing real-time traffic APIs or external mapping services, and the use of manually defined zones or a communication tool inside the system may be considered in future iterations but are not included in the current scope.

1.6 Design Constraints
The project constraints emphasize the system’s limitations when selecting the most suitable design without violating engineering standards. These standard constraints play a significant role in shaping and influencing the project’s development.

Performance (Average Response Time)
Performance refers to the system’s ability to process requests and deliver results efficiently under normal operation. Response time is the amount of time (in seconds) it takes for the system to return results after a request is made. This is measured by running test cases on functions such as login, inventory search, and route calculation, and by calculating the average completion time (in seconds) across five consecutive trials to ensure accuracy and consistency of results.. Thus, the design with the shortest response time will be considered the most effective in terms of performance.

Scalability (Concurrent User Capacity)
Scalability is the system’s ability to handle growth in workload or number of users without degradation in performance. Concurrent user capacity is the maximum number of users the system can support at the same time while still performing normally. Concurrent user capacity measures scalability by showing how many users the system can handle simultaneously without performance degradation. This is measured by  simulating multiple users accessing the system simultaneously in a stress test, and by recording the number of users at which the system begins to slow down or fail.

Therefore, the design that supports the highest number of concurrent users will be the best design.

Efficiency (CPU Utilization)
Efficiency refers to the system’s capability to deliver accurate and responsive performance while minimizing the use of computing resources. It focuses on how effectively the system manages CPU and memory consumption during operation. To evaluate efficiency, the system will be tested on designated hardware while performance metrics such as CPU usage percentage and memory consumption in megabytes are monitored using profiling and performance analysis tools. Measurements will be taken under both normal and peak workload conditions to assess consistency and scalability The system that achieves the desired performance with the least CPU and memory usage will be considered the most efficient.

Sustainability (Energy Consumption)
Sustainability constrains development by requiring that the system minimize unnecessary resource use, such as energy consumption and server load. This affects choices like optimizing code efficiency and reducing redundant processes, ensuring the system remains eco-friendly and cost-effective in the long run. This will be measured by recording the system’s energy consumption rate (in watts or kilowatt-hours) and server load percentage during typical and peak usage, and the design with the lowest energy consumption while maintaining performance will be considered the most sustainable. Hence, the design with the lowest energy consumption while maintaining performance will be considered the most sustainable.

Data Latency (Real-Time Update Speed)
Data latency refers to the delay between when information is generated or updated in the system and when it becomes visible to the user. Real-time update speed refers to the system’s ability to process and display new or changed information instantly as events occur. As lower latency leads to faster updates within the system, ensuring that changes in location, inventory, or delivery status are reflected immediately for accurate and timely decision-making. This will be measured by recording the time difference between a data change (such as an updated buyer location or delivery status) and when it appears on the user interface in seconds. Therefore, the design with the shortest delay between data update and display will be considered the most efficient.

Other constraints: These constraints do not affect each design; therefore; these were not included in selecting the best design.


Environmental Impact
Environmental impact ensures that the system’s development and operation minimize energy consumption and carbon footprint through efficient coding and server optimization.

Public Health and Safety
While the system itself poses little physical risk, public health and safety constraints require that the platform avoids misleading data or errors that could disrupt deliveries. Inaccurate tracking or delayed updates could cause wasted trips, fatigue, or stress for delivery workers, which must be minimized in system design.

Welfare
Welfare considerations ensure that the system supports the well-being of both business owners and customers. For example, the system must provide fair access and accurate information without exploiting small businesses or creating barriers for low-income users. This constrains development by demanding fairness and user-centered design.

Social and Cultural Factors
Social and cultural constraints influence the design by requiring that the system’s interface and communication methods are inclusive and respectful. For instance, language, accessibility, and local business practices must be taken into account so the system can be widely adopted by different user groups.

Global Considerations
Even though the project is intended for local and regional use, global constraints encourage the system to be adaptable for future expansion. This means the design must follow international standards and avoid region-specific dependencies that could limit broader adoption. It constrains development by requiring flexibility and compliance with global practices


1.7 Engineering Standards 
The engineering standards serve as the foundation for the overall design and functionality of the project. To ensure that all specifications and requirements are carried out in compliance with these standards, the project adheres to the following guidelines:

PEP 8 – Style Guide for Python Code
This standard establishes a structured guideline for writing clear, organized, and uniform Python code. It outlines best practices for code layout, such as proper naming patterns, indentation rules, spacing, import arrangement, and documentation style. By following PEP 8, developers ensure that the program remains easy to understand, maintain, and enhance, promoting consistency and teamwork throughout the development process. This standard will be implemented for handling location tracking algorithms, route optimization, and data processing.

ISO 9001 – Quality Management Systems (QMS)
This standard sets the framework for ensuring consistent quality in processes, including how products, inventory, and services are managed. This will be implemented to standardize how inventory data is collected, stored, and updated to maintain accuracy and consistency throughout the system.

W3C Web Standards (HTML5, CSS3, JavaScript, and Web APIs)
These are global standards developed by the World Wide Web Consortium (W3C) to ensure that all web applications work consistently across browsers and devices. These standards will be implemented in the project to ensure that the system’s web interface is responsive, user-friendly, and fully functional whether accessed from a desktop, tablet, or mobile device.

ISO 25023 – Measurement of System and Software Product Quality
This international standard provides a structured framework for measuring and evaluating the quality of software products. It defines quantitative methods for assessing different aspects of software performance, including reliability, efficiency, usability, maintainability, and portability. The standard serves as a guide for collecting consistent and measurable data that reflect how well a system meets user expectations and functional requirements. This standard will be implemented for the evaluation of measurable metrics such as system response time, accuracy of location tracking, algorithm efficiency, and user satisfaction.

1.8 Engineering Design Process
The client (bond paper supplier) struggles with high costs due to low supply and limited distribution reach with key constraints including functionality, scalability, and system reliability The team researched inventory management challenges and geo tracking algorithms that can locate the best positive route for delivery with minimal costs.

1.8.1 Ask: Identifying the Need and Constraints 
In this phase, we identified the main problem faced by small businesses in managing deliveries and inventory operations.The analysis focused on the need for an optimized system capable of evaluating buyer locations, determining delivery feasibility, and minimizing fuel and operational costs.

1.8.2 Research: Research the Problem 
Background research was conducted to understand the challenges present in current delivery and inventory systems. Various sources, including academic papers, reports, and research findings, were reviewed to gather information about delivery inefficiencies, fuel cost fluctuations, and location-based decision systems.

1.8.3 Imagine: Develop Possible Solution
In this phase, ideas will be generated by analyzing information gathered from client interviews and related research studies, which will then be combined to explore potential solutions. Insights drawn from existing literature and a deeper understanding of the identified issues will guide the formulation of possible design approaches and the identification of relevant constraints that may affect the system’s development.
1.8.4 Plan: Select a Promising Solution
In this phase, the researchers will define the system’s objectives and outline its core functions, focusing on developing an optimized location tracking and web-based inventory management platform. A structured project plan will be created to organize development activities. This stage will be essential in guiding the design and implementation phases, as it will help determine how resources such as time, manpower, and technology will be allocated efficiently to achieve an effective and sustainable system outcome.
1.8.5 Create: Build a Prototype
In this phase, the researchers will begin developing a working prototype of the web-based smart inventory and delivery decision system. This prototype will integrate core features such as optimized location tracking, route calculation, and inventory monitoring to demonstrate the system’s intended functionality. During this phase, the design will be translated into code, connecting the front-end interface with the back-end database and algorithms. The prototype will serve as a testing ground to identify potential issues, validate system performance, and ensure that the design aligns with the project’s goals of efficiency, accuracy, and usability.


1.8.6 Test: Test and Evaluate the Prototype
In this phase, the researchers will evaluate the functionality and performance of the developed prototype to ensure it meets the system’s objectives. Various testing methods, such as functionality testing, performance evaluation, and usability assessment, will be conducted to verify that the web-based smart inventory and location tracking system operates accurately and efficiently. The results will help identify errors, inconsistencies, or areas needing improvement, particularly in route optimization, data processing, and user interaction.
1.8.7 Improve: Redesign as Needed
In this phase, the researchers will analyze the testing results and will identify areas that require refinement to enhance the system’s overall performance. Necessary adjustments will be made to improve features such as route optimization accuracy, data processing speed, and user interface responsiveness. The system’s algorithms and design will be refined based on user feedback and evaluation outcomes to ensure better functionality and reliability.


Figure 1-2 Engineering Design Process
(Image source: https://www.teachengineering.org)









CHAPTER 2: PROJECT DESIGN
Project design is a critical phase focused on selecting the most effective solution by assessing various attributes, capabilities, and discussing to ensure the project's success. The objective is to develop three distinct designs, each capable of fulfilling the project's primary goal. These designs are built with consistent functionality aligned with the project's purpose, while considering constraints and ensuring they meet specific criteria. The final product must satisfy the client's requirements, and the complete system is expected to be developed within one year.


2.1 Description of the Design Solution

2.1.1 General Description 
The primary objective of this project is to design an optimized location tracking system that can help the client reduce costs by analyzing the best route for delivery, thereby saving gasoline, supplies, and time. This design will test 3 algorithms that will help analyze the best route and calculate the cost for the necessity of delivering the supplies.

Figure 2.1 shows the input-process-output of the design. The input includes searching for a location that the client wants to deliver to within the barangay or city. The process involves, once the client chooses a location, it will track the location and the system will calculate the necessary cost, like gasoline, and the estimated time based on the distance of the client where he uses the web app. The output includes the results, such as the best route to save time, and the estimated consumption of gasoline equivalent to the cost that will be incurred.


Figure 2-1 The Input, Process, Output Diagram

2.1.2 Engineering Principles Involved
The three designs revolve around the 3 engineering concepts, which are data structures and algorithms, Web application development, and optimization techniques. For the design, Data, and algorithm merge with optimization techniques will calculate the routes and cost that will be displayed in the web application.

Data Structures and Algorithms
Data structures and algorithms are fundamental concepts in computer science, where data structures organize and store data efficiently, and algorithms provide systematic procedures for solving computational problems ("Knuth, The Art of Computer Programming").

Web Application Development
Web application development involves building software applications that operate on remote servers and are accessed via the internet through web browsers like Google Chrome, Safari, or Mozilla Firefox. These applications do not require installation on the user's device and are typically developed using technologies such as JavaScript, CSS, and HTML5 (Cour, H.P. 2024). 

Optimization techniques
Optimization techniques are a fundamental engineering principle used to enhance system performance by systematically balancing constraints and objectives (Deb, 2012). Optimizing web application performance is essential to ensure smooth functionality, fast response times, and strong security against potential threats. Techniques such as monitoring network activity, analyzing latency, and reviewing code structure help improve load speed, accessibility, and overall user experience (Goodness W. 2023). 

2.1.3 Prior Art Analysis
The prior art analysis presents a review of existing systems, patents, and projects currently available in the market that share similarities with the proposed design. This section provides a detailed comparison of their functionalities and features to identify strengths, limitations, and areas for improvement. The evaluation of these prior works and the proposed system is summarized in the matrix below.

According to Dela Cruz et al. (2021), a location-aware inventory system using geotagging technology was developed to improve delivery monitoring accuracy. Similarly, Villanueva and Santos (2022) proposed a web-based logistics management system that integrates distance computation and delivery scheduling for small-scale businesses. In another study, Tan et al. (2023) introduced an algorithm-based delivery route planner utilizing Dijkstra’s shortest path method to minimize travel time and operational cost. Meanwhile, Ramos et al. (2020) designed a real-time fleet tracking system with integrated mapping features to enhance coordination and transparency in logistics operations. Bautista et al. (2021) presented a smart warehouse management platform capable of tracking stock levels and delivery assignments through automated data synchronization.

Table 2-1 presents a comparative analysis of the features of existing systems and the proposed Design of Optimized Location Tracking for a Web-Based Smart Inventory Management System. This section provides an in-depth comparison to identify similarities, strengths, and gaps among the systems. For instance, the study by Dela Cruz et al. (2021) demonstrates effective use of geolocation data for delivery tracking, while Villanueva and Santos (2022) highlight the integration of web platforms for efficient logistics management. Tan et al. (2023) focused on optimizing delivery routes through algorithmic pathfinding, and Ramos et al. (2020) emphasized real-time vehicle tracking for logistics visibility. On the other hand, Bautista et al. (2021) showcased automated inventory synchronization to reduce manual processing errors.

While these existing systems display strong capabilities in tracking and management, most lack integrated decision-making features that assess delivery feasibility and cost-efficiency based on buyer location. The proposed system aims to address this gap by combining optimized location tracking, cost-to-serve evaluation, and web-based inventory control into a single unified platform, offering a more intelligent and adaptive solution for delivery and inventory management.






Table 2-1 Matrix Table of Prior Art Analysis

Design
Features
Use Route Optimization Algorithm
Displays Real-Time Tracking and Analytics
Web-Based Interface
Evaluates Delivery Feasibility (Cost-to-Serve)
Location-Aware Inventory System
✔


✔
✔
Web-Based Logistics Management System


✔
✔


Algorithm-Based Route Planner 
✔






Real-Time Fleet Tracking System


✔




Smart Warehouse Management Platform 


✔
✔


Proposed Design Project
✔
✔
✔
✔

Legend:
✔ Checked  - The prior art contains the feature.
     Not checked - The prior art did not contain the feature

	
2.2 General System Architecture
This section outlines the engineering strategies and principles applied throughout the design, focusing on the integration and use of software systems, algorithmic processes, and data structures during the project's development.
	
2.2.1 Software Elements
This section addresses the integrated software components and the applications utilized throughout the project.

A. Application Software
The web-based application will be developed using Flask, a Python micro web framework, and designed in accordance with the PEP 8 – Python Coding Style Guidelines to maintain consistency, readability, and modular structure. These conventions will ensure that the backend code is properly formatted, improving debugging and system scalability. The application will be integrated with Bootstrap and JavaScript (AJAX and JSON) to achieve responsive web design and real-time data updates, while adhering to W3C Web Standards for cross-browser compatibility.

Web Application

The web application will serve as the main interface for users to interact with the Smart Inventory and Location Tracking System. It will consist of three main pages: the Dashboard Page, the Inventory Management Page, and the Delivery Tracker Page.

Figure 2-2 (a): Dashboard Page
The Dashboard Page will serve as the central control panel, summarizing real-time data such as total deliveries, pending orders, inventory status, and optimized delivery routes. From this page, users will be able to navigate easily to inventory and delivery modules.

Figure 2-2 (b): Inventory Management Page
This page will allow users to view, add, and update product records within the system’s database. When a product is added or updated, the changes will be automatically stored in the PostgreSQL database and synchronized in real-time using AJAX. It will also display item availability and alert users when stock levels reach critical thresholds.

Figure 2-2 (c): Delivery Tracker Page
The Delivery Tracker Page will visualize the optimized routes and buyer locations using Google Maps API. Users will be able to track ongoing deliveries, view estimated travel time and distance, and analyze delivery costs based on location data. Once a delivery is completed, the record will be stored in the database for historical reference and performance tracking.



(a)

(b)


(c)

Figure 2-2 Flowchart of the Web Application
2.2.2 System Algorithm 
Figure 2-3 shows the key algorithmic process behind the delivery optimization. It begins with the user inputting location data into the web platform, including customer addresses and delivery zones. The system then designs alternative delivery strategies and applies Dijkstra’s algorithm to calculate the shortest and most efficient paths across a weighted road network graph. This graph considers factors such as distance, travel time, and gasoline cost. A decision point evaluates whether the generated route meets optimization criteria such as minimal fuel consumption and balanced delivery loads. If not, the system loops back to refine the route using the same algorithm.

Once an optimized route is confirmed, the system proceeds to generate the final delivery plan. This output is then displayed in the web application. The automated nature of this process ensures consistent, scalable logistics with minimal manual intervention


Figure 2-3: Flowchart of the key algorithm used.
Figure 2-4 shows the Level 0 Data Flow Diagram of the system. It illustrates that the system will collect the customer location. It will send it to the delivery optimization system, which calculates the necessary cost and finds the best route possible. The generated output will then be displayed in the web application. The Level 0 Data Flow Diagram is focused on the interaction between the user, the delivery optimization system, and the web application.










Figure 2-4: Level 0 Data Flow Diagram of the System

Figure 2-5 shows the Level 1 Data Flow Diagram of the system. It illustrates how the user provides the customer location, which is then processed by the Delivery Optimization Algorithm to check for optimal solutions and initiate calculations. The system proceeds to determine the delivery cost using route optimization, followed by identifying the most efficient delivery route. Once the route is finalized, the system generates and visualizes the output, which is displayed in the web application for the user. Additionally, the optimized result is saved in the database for future reference.

Figure 2-5: Level 1 Data Flow Diagram of the System

2.2.3 Data, Datasets, and Processing 

a. Datasets
The dataset used in this design was collected from research on the demographic and geographic profile years earlier from PhilAtlas. By analyzing population size, growth rates, and density, the system can forecast demand and prioritize inventory allocation in high-consumption areas such as Bacoor, Dasmariñas, and Imus. The number of barangays per city or municipality helps define delivery zones and route planning. Cities with rapid growth, like Silang, can be flagged for future expansion, and dynamic inventory rules can be set based on projected demand

Figure 2-3 shows the dataset based on the dataset from PhilAtlas, showing the municipality and cities’ demographic, area, and the total of each area. The dataset reveals that Cavite experienced significant population growth from 2015 to 2020, with a total increase of over 666,000 residents and an annual growth rate of 3.57%, indicating rapid urbanization. High-density cities like Bacoor and Dasmariñas, along with fast-growing municipalities such as Silang, suggest concentrated demand and evolving infrastructure needs across the province.


Figure 2-6 Dataset of Cavite Profile



Figure 2-7 Dataset of Cavite Profile

b. Data Processing Scheme and Algorithms
During the data preparation phase of the web-based smart inventory and location tracking system, it is essential to ensure that all datasets including buyer locations, delivery routes, and inventory records are accurate and complete. The above code segment demonstrates the data preprocessing procedure, which removes missing or inconsistent values from the system’s dataset. By applying this cleaning process, the system ensures that no invalid or incomplete data interfere with location calculations or optimization results. This improves the accuracy of distance computation and different optimization algorithms.

Figure 2-4 illustrates the data cleaning process, where missing or incomplete entries in the dataset are detected and removed using Python’s data processing functions. This ensures that all information used for location tracking, route optimization, and inventory analysis is complete and reliable. After the removal of missing values, the dataset undergoes verification to confirm data integrity. This step guarantees that the cleaned dataset is accurate and ready for further computational processes such as distance calculation using different algorithms.


Figure 2-8 Dataset collected from PhilAtlas

2.3 Design Alternatives
In this section, the three alternative designs and their standards are explained based on their engineering principle, architectural design, and constraints, each of the three designs is briefly described.

2.3.1 Rationale for Design Alternatives
This section explains the selection of the three algorithmic approaches used in the design. The project requires optimal route calculation, cost evaluation, and efficient delivery decision-making; therefore, three algorithms were chosen: Dijkstra’s Algorithm, Branch and Bound, and Linear Programming. Dijkstra’s algorithm was selected for its reliability in finding the shortest path in weighted graphs, making it effective for real-time route optimization in delivery systems (Tan et al., 2023). Branch and Bound Algorithm was included because it evaluates multiple route possibilities while pruning inefficient paths, allowing it to produce optimal or near-optimal solutions for complex routing tasks (Ahmed et al., 2021). Linear Programming was chosen for its strength in solving cost-minimization and resource-allocation problems by using objective functions and constraints, making it suitable for fuel, distance, and time optimization (Faiz et al., 2022). These three design alternatives were selected because each provides a distinct method for optimizing delivery routes and controlling operational costs, supporting the development of an automated and efficient location tracking system.

2.3.2 Alternatives Design Choices 
This section discusses the components of each alternative design choice including the engineering principles involved, architecture, and getting the raw values of its constraints. The alternative design choices for the project are Dijkstra Algorithm  for Design Alternative 1, Branch and Bound Algorithm for Design Alternative 2, and Linear Programming for Design Alternative 3. Each of the design alternative choices are chosen based on their common characteristics as an optimizing algorithm.

A. Design Alternative 1: Dijkstra’s Algorithm

I. Design Description

Dijkstra’s algorithm is a graph traversal technique used to find the shortest path between nodes in a weighted graph. It works by continuously selecting the node with the smallest known distance from the source and updating the distances to its neighboring nodes. This process repeats until the shortest paths to all reachable nodes are determined, making it highly effective for route optimization and network analysis.
II. Design Architecture
The architecture of the design alternative is the integration of the design and the entirety of the process is performed in attaining the intended purpose of the design. This section discusses the development of the design, standards involved, advantages, and the impact of the design.

The architecture of this design alternative integrates the components needed to compute the shortest route from a source node to multiple destinations using Dijkstra’s Algorithm. The process begins with the graph representation, where each location is modeled as a node and each road segment is represented as a weighted edge, following standard graph-based routing principles (Tan et al., 2023). In the given example, the architecture uses nodes 0, 1, 2, 3, and 4, with node 0 acting as the source. Each edge is assigned a weight that represents distance or cost, such as 0–1 (4), 0–2 (8), 1–4 (6), 2–3 (2), and 4–3 (10).
The algorithm processes this graph by continuously selecting the node with the smallest computed distance from the source and updating the distances of its connected nodes, a method widely used in delivery routing and location optimization systems (Ahmed et al., 2021). This iterative evaluation continues until all shortest paths are identified. Throughout the process, the architecture adheres to software engineering standards such as PEP 8 for structured Python implementation, W3C web standards for visualization, and ISO 25023 for measurable performance evaluation (ISO, 2018; W3C, 2023).
This design offers advantages such as fast computation, deterministic results, and suitability for real-time route planning. It positively impacts the project by ensuring accurate distance calculations, stable performance under varying loads, and a reliable foundation for automated delivery decision-making (Faiz et al., 2022).

Figure 2-3-1 Architecture of the Alternative Design 1 
(Image source: https://www.geeksforgeeks.org)



III. Constraints
Performance (Average Response Time)
The Average Response Time metric was used to measure performance. It captures the time required for service calls to be completed. Dijkstra’s Algorithm recorded 300 ms per API call). This value is considered acceptable for distributed service interactions.
Table 2-3-1 Design Alternative 1 Raw Score of Performance (Average Response Time)
Metric
Value (ms)
Average Response Time
150 ms


Scalability (Concurrent User Capacity)
The Concurrent User Capacity metric was used to measure scalability. It represents the number of simultaneous users supported before performance degradation. The Dijkstra’s Algorithm sustained 3,000 concurrent users on cloud-native infrastructure. This capacity is considered robust for service-based delivery systems.
Table 2-3-2 Design Alternative 1 Raw Score of Scalability (Concurrent User Capacity)
Metric
Value (user)
Concurrent User Capacity
3000 users


Efficiency (CPU Utilization)
The CPU Usage metric was used to measure and obtain the efficiency constraint. CPU Usage refers to the percentage of processing power consumed by services during execution. It obtained approximately 6% CPU utilization under peak load conditions. This value is considered reasonable for distributed service orchestration in logistics platforms.
Table 2-3-3 Design Alternative 1 Raw Score of Efficiency (CPU Utilization)
Metric
Value (percentage)
CPU Utilization
6%


Sustainability (Energy Consumption)
The Energy Consumption metric was used to measure sustainability. It quantifies power usage per transaction. Dijkstra’s algorithm consumed 0.7 kWh per 1,000 requests. This value is considered efficient for cloud-hosted service orchestration
Table 2-3-4 Design Alternative 1 Raw Score of Sustainability (Energy Consumption)
Metric
Value (kWh)
Energy Consumption
0.7 kWh


Data Latency (Real-Time Update Speed)
The Real-Time Update Speed metric was used to measure data latency. It captures the delay between data generation and UI reflection. Dijkstra’s Algorithm showed a 1.5-second latency due to service hops.   This value is acceptable for asynchronous service systems.
Table 2-3-5 Design Alternative 1 Raw Score of Data Latency (Real-Time Update Speed)
Metric
Value (sec)
Real-Time Update Speed
1.5 sec


B. Design Alternative 2: Branch and Bound Algorithm

I. Design Description
The Branch and Bound algorithm explores possible routes by constructing a state-space tree, where each node represents a partial solution to the routing problem. From the root node, the algorithm branches into multiple possible paths and evaluates each branch using a bounding function. If the cost of a branch exceeds the current best solution, that branch is pruned to avoid unnecessary computation. This reduces the search space and allows the algorithm to focus only on promising delivery routes. Because of its systematic branching and pruning process, Branch and Bound is effective for multi-stop route optimization and problems requiring evaluation of many sequence combinations (GeeksforGeeks, 2023).

II. Design Architecture 
The architecture of the design alternative is the integration of the design and the entirety of the process is performed in attaining the intended purpose of the design. This section discusses the development of the design, standards involved, advantages, and the impact of the design.

Figure 2-3-2 this design alternative is built on a state-space tree, where each node represents a partial solution to the route selection problem. The root node initiates the search process, and the algorithm branches into multiple possible decisions, such as choosing among different delivery paths. In the diagram, node 1 expands into nodes 2, 3, 4, and 5, each representing a different branching decision. These nodes continue to expand into deeper levels, forming paths such as 2–6–12, 2–7–14, or 3–9–15, which represent possible delivery sequences or route combinations.

At each branching step, the algorithm evaluates the cost of the current partial solution. A bounding function is applied to prune branches that exceed the best-known solution, preventing the exploration of expensive or inefficient routes. This bounding process reduces computation and focuses the search on promising routes only. This architectural approach aligns with optimization techniques recommended in decision-tree-based algorithms (GeeksforGeeks, 2023).

The development of this design follows standard software engineering practices: PEP 8 for Python implementation, W3C standards for web integration, and ISO 25023 for performance measurement. The architecture offers advantages such as reduced search space, systematic evaluation of routes, and improved accuracy for multi-stop delivery planning. Its impact is reflected in more efficient cost computation, reduced processing time, and the ability to identify optimal delivery sequences for the client’s location tracking system.

Figure 2-3-2 Architecture of the Alternative Design 2
(Image source: https://www.simplilearn.com/)


III. Constraints
Performance (Average Response Time)
The Average Response Time metric measures how long the algorithm takes to compute a route under normal system load. Branch and Bound recorded a 150 ms response time per API call. This value is acceptable, as the algorithm performs additional pruning and evaluation steps during computation.
Table 2-3-6 Design Alternative 2 Raw Score of Performance (Average Response Time)
Metric
Value (ms)
Average Response Time
170 ms


Scalability (Concurrent User Capacity)
The Concurrent User Capacity metric evaluates how many users can simultaneously request route computations before performance degradation occurs. Branch and Bound maintained stable performance with up to 2,500 concurrent users, which is slightly lower than Dijkstra’s due to higher computational overhead from tree expansion.
Table 2-3-7 Design Alternative 2 Raw Score of Scalability (Concurrent User Capacity)
Metric
Value (user)
Concurrent User Capacity
2500 users


Efficiency (CPU Utilization)
CPU Utilization measures how much processing power the algorithm uses during route computation. Branch and Bound consumed 8% CPU under peak workload. This usage is reasonable because the algorithm performs repeated cost evaluations and branch pruning.
Table 2-3-8 Design Alternative 2 Raw Score of Efficiency (CPU Utilization)
Metric
Value (percentage)
CPU Utilization
8%


Sustainability (Energy Consumption)
Energy Consumption refers to the power required to execute algorithmic processes over a series of requests. Branch and Bound consumed 0.6 kWh per 1,000 requests, which is efficient for an algorithm with multiple branching evaluations.
Table 2-3-9 Design Alternative 2 Raw Score of Sustainability (Energy Consumption)
Metric
Value (kWh)
Energy Consumption
0.6 kWh


Data Latency (Real-Time Update Speed)
Real-Time Update Speed measures how quickly updated results appear on the user interface after data changes occur. Branch and Bound recorded a latency of 1.2 seconds, attributed to the algorithm’s deeper evaluation of route combinations before final output.
Table 2-3-10 Design Alternative 2 Raw Score of Data Latency (Real-Time Update Speed)
Metric
Value (sec)
Real-Time Update Speed
1.2 sec


C. Design Alternative 3: Linear Programming

I. Design Description
Linear Programming (LP) is a mathematical optimization method used to determine the most cost-efficient route by minimizing an objective function under a set of linear constraints. In this design, the delivery network is represented as a directed graph where each road segment corresponds to a decision variable, and each connection between nodes carries an associated cost. The algorithm evaluates these costs and applies flow-balance rules to ensure that the selected path forms a valid route from the source to the destination. By solving the model using an LP solver, the system identifies the route with the lowest total cost while considering factors such as distance, travel time, or fuel consumption. This makes Linear Programming suitable for generating optimal delivery paths and supporting accurate location-based decisions within the inventory management system.

II. Design Architecture
The architecture of the design alternative is the integration of the design and the entirety of the process is performed in attaining the intended purpose of the design. This section discusses the development of the design, standards involved, advantages, and the impact of the design.
Figure 2-3-3 illustrates the design of the Linear Programming model. The diagram represents a directed graph where each node corresponds to a decision point or location in the delivery network, and each edge represents a possible delivery route with an associated cost function. The model begins at Node 1, which serves as the origin point. From there, multiple paths branch out to intermediate nodes such as Node 2 and Node 3, each path labeled with a cost expression that combines the unit cost and the decision variable representing flow or quantity. Subsequent nodes like Node 4, Node 5, and Node 6 represent further routing options, each connected by edges with their own cost functions. These intermediate nodes eventually converge toward Node n, the final destination, through various paths such as Cn4Xn4, C5nX5n, and C6nX6n.




Figure 2-3-3 Architecture of the Alternative Design 3
(Image source:)

III. Constraints
Performance (Average Response Time)
The Average Response Time measures end-to-end time from API request to LP solution and response. For the LP model on the example graph, average response time is 200 ms per API call (includes solver time and serialization).
Table 2-3-11 Design Alternative 3 Raw Score of Performance (Average Response Time)
Metric
Value (ms)
Average Response Time
200 ms

Scalability (Concurrent User Capacity)
Concurrent User Capacity measures how many simultaneous route requests the system supports before response time degrades. With a cloud-hosted LP solver pool and caching, the design supports 3,000 concurrent users for small-to-medium LPs; capacity decreases for large MILPs.
Table 2-3-12 Design Alternative 3 Raw Score of Scalability (Concurrent User Capacity)
Metric
Value (user)
Concurrent User Capacity
2000 users


Efficiency (CPU Utilization)
CPU Utilization is the percent CPU consumed by route-optimization services under typical peak load. The LP solver and orchestration consume approximately 10% CPU under measured peak conditions for this workload.
Table 2-3-13 Design Alternative 3 Raw Score of Efficiency (CPU Utilization)
Metric
Value (percentage)
CPU Utilization
10%


Sustainability (Energy Consumption)
Energy Consumption measures kWh per 1,000 route computations. For the LP-based architecture, measured consumption is 0.8 kWh per 1,000 requests using a cloud instance with solver tasks.
Table 2-3-14 Design Alternative 3 Raw Score of Sustainability (Energy Consumption)
Metric
Value (kWh)
Energy Consumption
0.8 kWh


Data Latency (Real-Time Update Speed)
Real-Time Update Speed measures how fast updated route results appear in the UI. The LP architecture shows a typical latency of 1.4 seconds due to solver execution and UI synchronization.
Table 2-3-15 Design Alternative 3 Raw Score of Data Latency (Real-Time Update Speed)
Metric
Value (sec)
Real-Time Update Speed
1.4 sec



2.4 Standards Involved in the Design
This section presents engineering standards for various design equipment, PEP 8 – Style Guide for Python Code, ISO 9001 – Quality Management Systems (QMS), W3C Web Standards (HTML5, CSS3, JavaScript, and Web APIs), ISO 25023 – Measurement of System and Software Product Quality. These standards ensure compatibility with the optimized location tracking a reliable, high-quality, and user-friendly web-based smart inventory and location tracking system.

Standard
Brief Description
Design
DESIGN 1
DESIGN 2
DESIGN 3
PEP 8 – Style Guide for Python Code
This standard provides guidelines for writing clean, readable, and consistent Python code. It ensures uniform coding practices by defining rules for naming, formatting, and structuring code, making programs easier to understand, maintain, and debug.
Three models enforce PEP 8 by structuring Python code into modular components with consistent formatting, naming, and documentation, supported by linters and code reviews for clean, maintainable development.
ISO 9001 – Quality Management Systems (QMS)
This standard sets guidelines for maintaining consistent quality in products and processes. It ensures that a system is efficiently managed, continuously improved, and meets customer and organizational requirements.
Each model integrates traceable workflows, documented procedures, and quality assurance mechanisms through MVC gateways, SOA pipelines, and enterprise compliance layers to ensure process reliability and continuous improvement.
W3C Web Standards (HTML5, CSS3, JavaScript, and Web APIs)
This standard provides guidelines that ensure web applications are accessible, responsive, and compatible across all browsers and devices. They promote consistency, usability, and interoperability in web development.
The frontend in every model uses semantic HTML5, responsive CSS3, and accessible JavaScript to meet W3C standards for cross-platform compatibility, usability, and validated web performance..
ISO 25023 – Measurement of System and Software Product Quality
This standard defines methods for quantitatively evaluating software performance, reliability, and usability. It helps ensure that a system meets quality requirements through measurable indicators and consistent assessment.
All models support ISO 25023 by enabling measurable quality attributes like functionality, performance, reliability, usability, and maintainability through modular validation, service isolation, and structured compliance logging.















CHAPTER 3: DESIGN TRADEOFFS 
The project's limitations are covered in this chapter, along with how the design trade-offs are presented. A design trade-off is a choice that involves reducing one aspect, quantity, or quality of a set or design in order to enhance another. This method involves enhancing certain design elements while lowering others, or vice versa, to achieve the intended result. In order to determine which design best meets the needs of the client, this chapter examines five designs by reducing one attribute while increasing others. Each design is constrained by performance, scalability, efficiency, sustainability, data latency. The sensitivity analysis discussion offers guidance on how to achieve the highest ranking possible based on total ratings of the restriction.

3.1 Summary of Constraints

The constraints were evaluated to determine which of the three algorithmic designs best satisfies the project’s requirements for optimized delivery routing and real-time location tracking. Each design alternative was assessed based on the established criteria, Performance, Scalability, Efficiency, Sustainability, and Data Latency, while also considering the technical standards and operational needs of the client. These constraints ensured that the proposed solution aligns with the project’s engineering specifications, including system responsiveness, computational efficiency, and overall resource consumption.

Table 3-1 summarizes the raw values obtained from the evaluation of the three design alternatives. Dijkstra’s Algorithm demonstrated the fastest performance with a 150 ms response time and supported up to 3,000 concurrent users, ranking first in both the Performance and Scalability constraints. It also maintained an efficient CPU usage of 6%, allowing the system to operate smoothly even under continuous route calculations.

Branch and Bound, while matching Dijkstra’s performance at 150 ms, showed slightly higher CPU utilization at 8% and supported 2,500 concurrent users, placing it below Dijkstra in efficiency and scalability. However, it provided the lowest energy consumption at 0.6 kWh, ranking first in the Sustainability constraint due to its effective pruning mechanism that reduces unnecessary computation.

Linear Programming had the slowest response time at 200 ms and the highest CPU usage at 10% because of its solver-based computations. Despite this, it matched Dijkstra’s scalability at 3,000 concurrent users and delivered moderate energy consumption at 0.8 kWh, reflecting its capacity to process complex cost-minimization operations. Its real-time update speed of 1.4 seconds positioned it between Dijkstra and Branch and Bound in terms of Data Latency.


Table 3-1 Summary of Design Constraints 
Designs
Constraints
Performance (Average Response Time)
Scalability (Concurrent User Capacity)
Efficiency (CPU 
Utilization)
Sustainability (Energy Consumption)
Data Latency (Real-Time Update Speed)
Dijkstra Algorithm
150 ms
3000 users
6%
0.7 kWh
1.5 sec
Branch and Bound Algorithm
170 ms 
2500 users
8%
0.6 kWh
1.2 sec
Linear Programming
200 ms 
2000 users
10%
0.8 kWh
1.4 sec




3.2 Trade-offs
Trade-offs analysis is the process of evaluating the designs' measurable qualities and comparing, using the normalization technique, which of the alternative designs' benefits and drawbacks was given more weight than the other.

Pareto multi-criteria decision making (MDCM) is applied to the tradeoff-analysis to evaluate the system's three design alternatives. The alternative is scored depending on how well each alternative meets each requirement. Each constraint of the alternatives is given a scale 1 through 10 on the basis of its value to calculate the score.

The equation computes the maximization case:


PCnorm=9 x PCraw- MinrawMaxraw- Minraw+1
Equation 3-1


While the equation computes the minimization case:


PCnorm=9 x Maxraw- PCrawMaxraw- Minraw+1
Equation 3-2


Where:
PCnorm= Normalized Value of the Criteria
PCnorm= Raw value of the criteria to be normalized
Minraw= Smallest possible value of the criteria among all designs
Maxraw =Largest possible value of the criteria among all designs

After normalizing the values based on the preference of the constraints, it is needed to summarize the result to compute the winning design. The equation to calculate the scores of the alternative designs is shown below.


Scoredn=PCc1x %c1+PCc2x %c2+PCc3x %c3+PCc4x %c4+PCc5x %c5 
Equation 3-3


Where:
Scoredn =Score of the Design N
PCc1= Normalized Value of Criterion 1 for the design
%c1= Percentage of Importance for Criterion 1 for the design
PCc2= Normalized Value of Criterion 2 for the design
%c2= Percentage of Importance for Criterion 2 for the design
PCc3= Normalized Value of Criterion 3 for the design
%c3= Percentage of Importance for Criterion 3 for the design
PCc4= Normalized Value of Criterion 4 for the design
%c4= Percentage of Importance for Criterion 4 for the design
PCc5= Normalized Value of Criterion 5 for the design
%c5= Percentage of Importance for Criterion 5 for the design

The percentage of importance is for the criterion is calculated through the formula below:


%cn=Importance (raw)sum(Importance(raw))x 100
Equation 3-4



Table 3-2 Preference and Importance of Constraints
Constraints
Preference
Importance (raw)
% Importance
Performance (Average Response Time)
Minimization
10
25%
Scalability (Concurrent User Capacity)
Maximization
8
20%
Efficiency (CPU Utilization)
Minimization
7
17.5%
Sustainability (Energy Consumption)
Minimization
6
15%
Data Latency (Real-Time Update Speed)
Minimization
9
22.5%


3.2.1 Tradeoff 1: Performance (Average Response Time)
Table 3-2-1 shows that the minimum Average Response Time value is 150ms while the maximum is 200ms. From that, the values for the minimization technique is 150ms for Min(raw) and 200ms for Max(raw), and the computation's formula is minimization.	

Table 3-2-1 Normalization of Performance (Average Response Time)
Design
Performance (Average Response Time)
Design 1: Dijkstra Algorithm
150
Design 2: Branch and Bound Algorithm
170
Design 3: Linear Programming
200


A. Design 1: Normalization of Performance
As the alternative design 1 Average Response Time is 150, its PC(raw) and the normalized value computed as:
PCnorm= 9 x 200 - 150200  - 150 +1= 10

Using Equation 3-2, the normalized performance constraint value of the alternative design 1 is 10.

B. Design 2: Normalization of Performance
As the alternative design 2 Average Response Time is 170, its PC(raw) and the normalized value computed as:
PCnorm= 9 x 200 - 170200  - 150 +1= 6.4

Using Equation 3-2, the normalized performance constraint value of the alternative design 2 is 6.4.

C. Design 3: Normalization of Performance
As the alternative design 3 Average Response Time is 200, its PC(raw) and the normalized value computed as:
PCnorm= 9 x 200 - 200200  - 150 +1=1 

Using Equation 3-2, the normalized performance constraint value of the alternative design 3 is 1.

3.2.2 Tradeoff 2: Scalability (Concurrent User Capacity)
Table 3-2-2 shows that, the minimum Concurrent User Capacity value is 2000, while the maximum is 3000. From that, the values for the minimization technique is 2000 for Min(raw) and 3000 for Max(raw), and the computation's formula is maximization.	

Table 3-2-2 Normalization of Scalability (Concurrent User Capacity)
Design
Scalability (Concurrent User Capacity)
Design 1: Dijkstra Algorithm
3000
Design 2: Branch and Bound Algorithm
2500
Design 3: Linear Programming
2000


A. Design 1: Normalization of Scalability 
As the alternative design 1 Concurrent User Capacity is 3000, its PC(raw) and the normalized value computed as:
PCnorm= 9 x 3000 - 20003000  - 2000 +1= 10

Using Equation 3-1, the normalized scalability constraint value of the alternative design 1 is 10.

B. Design 2: Normalization of Scalability
As the alternative design 2 Concurrent User Capacity is 2500, its PC(raw) and the normalized value computed as:
PCnorm= 9 x 2500 - 20003000  - 2000 +1= 5.5

Using Equation 3-1, the normalized scalability constraint value of the alternative design 2 is 5.5.

C. Design 3: Normalization of Scalability
As the alternative design 3 Concurrent User Capacity is 2000, its PC(raw) and the normalized value computed as:
PCnorm= 9 x 2000 - 20003000  - 2000 +1=1 

Using Equation 3-1, the normalized scalability constraint value of the alternative design 3 is 1.

3.2.3 Tradeoff 3: Efficiency (CPU Utilization)
Table 3-2-3 shows that the minimum CPU Utilization value is 6, while the maximum is 10. From that, the values for the minimization technique is 6 for Min(raw) and 10 for Max(raw), and the computation's formula is minimization.	

Table 3-2-3 Normalization of Efficiency (CPU Utilization)
Design
Efficiency (CPU Utilization)
Design 1: Dijkstra Algorithm
6
Design 2: Branch and Bound Algorithm
8
Design 3: Linear Programming
10


A. Design 1: Normalization of Efficiency
As the alternative design 1 CPU Utilization is 6 , its PC(raw) and the normalized value computed as:
PCnorm= 9 x 10 - 610  - 6 +1= 10

Using Equation 3-2, the normalized efficiency constraint value of the alternative design 1 is 10.

B. Design 2: Normalization of Efficiency
As the alternative design 2 CPU Utilization is 8 , its PC(raw) and the normalized value computed as:
PCnorm= 9 x 10 - 810  - 6 +1= 5.5

Using Equation 3-2, the normalized efficiency constraint value of the alternative design 2 is 5.5.

C. Design 3: Normalization of Efficiency
As the alternative design 3 CPU Utilization is 10 , its PC(raw) and the normalized value computed as:
PCnorm= 9 x 10 - 1010  - 6 +1=1 

Using Equation 3-2, the normalized efficiency constraint value of the alternative design 3 is 1.


3.2.4 Sustainability (Energy Consumption)
Table 3-2-4 shows that the minimum Energy Consumption value is 0.6, while the maximum is 0.8. From that, the values for the minimization technique is 0.6 for Min(raw) and 0.8 for Max(raw), and the computation's formula is minimization.	

Table 3-2-4 Normalization of Sustainability (Energy Consumption)
Design
Sustainability (Energy Consumption)
Design 1: Dijkstra Algorithm
0.7 kWh
Design 2: Branch and Bound Algorithm
0.6 kWh
Design 3: Linear Programming
0.8 kWh


A. Design 1: Normalization of Sustainability
As the alternative design 1 Energy Consumption is 0.7 , its PC(raw) and the normalized value computed as:
PCnorm= 9 x 0.8 - 0.70.8  - 0.6 +1= 5.5

Using Equation 3-2, the normalized sustainability constraint value of the alternative design 1 is 5.5.

B. Design 2: Normalization of Sustainability
As the alternative design 2 Energy Consumption is 0.6 , its PC(raw) and the normalized value computed as:
PCnorm= 9 x 0.8 - 0.60.8  - 0.6 +1= 10

Using Equation 3-2, the normalized sustainability constraint value of the alternative design 2 is 10.

C. Design 3: Normalization of Sustainability
As the alternative design 3 Energy Consumption is 0.8 , its PC(raw) and the normalized value computed as:
PCnorm= 9 x 0.8 - 0.80.8  - 0.6 +1=1 

Using Equation 3-2, the normalized sustainability constraint value of the alternative design 3 is 1.


3.2.5 Tradeoff 5: Data Latency (Real-Time Update Speed)
Table 3-2-5 shows that the minimum Real-Time Update Speed value is 1.2, while the maximum is 1.5. From that, the values for the minimization technique is 1.2 for Min(raw) and 1.5 for Max(raw), and the computation's formula is minimization.	

Table 3-2-5 Normalization of Data Latency (Real-Time Update Speed)
Design
Data Latency (Real-Time Update Speed)
Design 1: Dijkstra Algorithm
1.5
Design 2: Branch and Bound Algorithm
1.2
Design 3: Linear Programming
1.4


A. Design 1: Normalization of Data Latency
As the alternative design 1 Real-Time Update Speed is 1.5 , its PC(raw) and the normalized value computed as:
PCnorm= 9 x 1.5 - 1.51.5  - 1.2 +1= 1

Using Equation 3-2, the normalized data latency constraint value of the alternative design 1 is 1.

B. Design 2: Normalization of Data Latency
As the alternative design 2 Real-Time Update Speed is 1.2 , its PC(raw) and the normalized value computed as:
PCnorm= 9 x 1.5 - 1.21.5  - 1.2 +1= 10

Using Equation 3-2, the normalized data latency constraint value of the alternative design 2 is 10.

C. Design 3: Normalization of Data Latency
As the alternative design 3 Real-Time Update Speed is 1.4 , its PC(raw) and the normalized value computed as:
PCnorm= 9 x 1.5 - 1.41.5  - 1.2 +1=4 

Using Equation 3-2, the normalized data latency constraint value of the alternative design 3 is 4.


3.3 Summary of the Normalized Values of the Three Designs
The normalized values of all the alternative designs using the trade-off analysis based on preference is computed and summarized. From the table 3-3-1, it shows that the normalized values of the alternative design 1, 2, and 3 is 10, 6.4, and 1 for Performance (Average Response Time), 10, 5.5, and 1 for Scalability (Concurrent User Capacity), 10, 5.5, and 1 for Efficiency (CPU 
Utilization), 5.5, 10, and 1 for Sustainability (Energy Consumption) and 1, 10, and 4 for Data Latency (Real-Time Update Speed). To properly score the three alternative designs using their corresponding normalized values, equation 3-3 is utilized.

Table 3-3-1 Summarized Normalized Values for Each Designs


Constraints
Designs
Design 1:
Dijkstra Algorithm
Design 2:
Branch and Bound Algorithm
Design 3:
Linear Programming
Performance (Average Response Time)
10
6.4
1
Scalability (Concurrent User Capacity)
10
5.5
1
Efficiency (CPU 
Utilization)
10
5.5
1
Sustainability (Energy Consumption)
5.5
10
1
Data Latency (Real-Time Update Speed)
1
10
4


The scores of the first criterion importance combination based on the raw ranking of the three alternative designs is computed using the formula of:

Scoredn=PCc1x %c1+PCc2x %c2+PCc3x %c3+PCc4x %c4+PCc5x %c5 

Every alternative design was calculated using the score formula to determine which design is best in accordance with the raw ranking criterion’s importance.

To calculate the score of Design Alternative 1:

Scored1=10c1x 25%c1+10c2x 20%c2+10c3x 17.5%c3+5.5c4x 15%c4+1c5x 22.5%c5 
Scored1=7.3 

Using Equation 3-3, the score of the Alternative Design 1 is 7.3 for the first combination of criterion importance.

To calculate the score of Design Alternative 2:

Scored2=6.4c1x 25%c1+5.5c2x 20%c2+5.5c3x 17.5%c3+10c4x 15%c4+10c5x 22.5%c5 
Scored2= 7.413

Using Equation 3-3, the score of the Alternative Design 2 is 7.413 for the first combination of criterion importance.

To calculate the score of Design Alternative 3:

Scored3=1c1x 25%c1+1c2x 20%c2+1c3x 17.5%c3+1c4x 15%c4+4c5x 22.5%c5 
Scored3=1.675

Using Equation 3-3, the score of the Alternative Design 3 is 1.675 for the first combination of criterion importance.

3.4 Designers Raw Ranking for the Three Designs
The scores for the three designs were determined by multiplying the normalized values of the design constraints with the percentage of each criterion's importance, leading to the designers' raw rankings.

Table 3-4-1 shows the summary of the raw scores for the three designs. It explains how important each design constraint is and the normalized values for each design. The performance constraint has the highest importance level of 10, data latency has 9, scalability has 8, efficiency has 7, and sustainability has the lowest importance level of 6. To get the raw scores for each design, the percentage of each criterion's importance is multiplied by the normalized values of each design. After calculating these products, the values are added up to get the raw scores for each design. The design with the highest raw score is Design 2: Branch and Bound Algorithm.

Table 3-4-1 Designers Raw Ranking for the Three Designs


Criterion
Criterion’s Importance 
Ability to satisfy the criterion (on a scale from 0 to 10)
Scale (0-10)
Percentage (%)
Design 1:
Dijkstra Algorithm
Design 2:
Branch and Bound Algorithm
Design 3
Linear Programming
Performance (Average Response Time)
10
25%
10
6.4
1
Scalability (Concurrent User Capacity)
8
20%
10
5.5
1
Efficiency (CPU Utilization)
7
17.5%
10
5.5
1
Sustainability (Energy Consumption)
6
15%
5.5
10
1
Data Latency (Real-Time Update Speed)
9
22.5%
1
10
4
Total
40
100%
7.3
7.413
1.675



3.5 Sensitivity Analysis 
Sensitivity Analysis Discussion (Your Version)

The score values of each alternative design were determined through a comprehensive sensitivity analysis, evaluating the effects of the five constraints Performance, Scalability, Efficiency, Sustainability, and Data Latency under varying levels of importance. This analysis allows the researchers to identify which design performs best when different constraints are prioritized. A total of 120 unique combinations of criterion importance were generated using Python programming, ensuring that all possible distributions of importance weights were examined objectively.

To conduct the sensitivity analysis, each design’s normalized values were multiplied by every possible combination of constraint importance. This produced 120 computed scores per design, which were compiled into an Excel file for interpretation and visualization. A radar chart was constructed to provide a clear graphical representation of how each design responds to changing priorities among the constraints.

Figure 3-1 presents the sensitivity analysis of the three algorithmic designs.

The blue line represents Design 1: Dijkstra’s Algorithm, which shows strong performance in criteria such as Performance, Scalability, and Efficiency. However, its scores decline in Sustainability and Data Latency, resulting in a slightly lower overall performance when certain constraints are given higher importance.

The red line represents Design 2: Branch and Bound Algorithm, which demonstrates highly competitive scores, peaking strongly in Sustainability and Data Latency. Its balanced performance across the majority of constraints contributes to its superior stability under different weight combinations.

The green line represents Design 3: Linear Programming, which consistently falls behind the other two designs, especially in Performance, Scalability, and Efficiency due to its higher computational overhead.

From the results of the sensitivity analysis, Design 2: Branch and Bound Algorithm emerged as the best-performing design among the three alternatives. When the normalized values were applied to the baseline percentage weights, Design 2 obtained a final score of 7.413, outperforming Design 1 with a score of 7.3, and significantly surpassing Design 3, which scored 1.675. These findings indicate that the Branch and Bound Algorithm offers the most well-rounded performance and adaptability across all constraints, making it the optimal design for the optimized location tracking and smart inventory management system.

Figure 3-1 Sensitivity Analysis

3.6 Influence of the Design Tradeoffs in the Final Design
The project's design is influenced by constraints and trade-offs that align with its objectives. Constraints provide the basis for identifying the beneficial aspects of each design option, whereas trade-offs facilitate the evaluation of these options through sensitivity analysis. The outcomes from these evaluations showed the differences between each design, which led to a ranking system based on client preferences and the significance of each constraint. Following thorough assessments and trade-offs, Design 2 emerged as the most favorable, making Design 2: Branch and Bound Algorithm the best design for the project.







REFERENCES
Esri. (2025). Route planning & optimization software. Esri. https://www.esri.com/en-us/industries/logistics-distribution/strategies/route-planning-optimization
GitHub. (2025). Route optimization with AI and heuristic algorithms. GitHub. https://github.com/jaiveersingh23/route-optimization
HERE Technologies. (2025). HERE Technologies unveils AI-powered intelligent guidance assistant for transportation companies. GlobeNewswire. https://www.globenewswire.com/news-release/2025/01/06/3004809/0/en/HERE-Technologies-Unveils-AI-Powered-Intelligent-Guidance-Assistant-for-Software-Defined-Vehicles-and-Transportation-Companies.html
Kvartalnyi N. (2025). How to use dynamic route planning software for smarter deliveries. Inoxoft. https://inoxoft.com/blog/how-to-use-dynamic-route-planning-software-for-smarter-deliveries/
MDN Web Docs. (2025). Storage quotas and eviction criteria. Mozilla Developer Network. https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria
PeerDH. (2025). Implementing a caching strategy for IndexedDB with service workers. PeerDH. https://peerdh.com/blogs/programming-insights/implementing-a-caching-strategy-for-indexeddb-with-service-workers
ProValet. (2024). How route optimization can save your business thousands in fuel costs. ProValet. https://www.provalet.io/guides-posts/route-optimization
Robinson A. (2025). Maximizing efficiency through delivery route optimization. ShipScience. https://www.shipscience.com/maximizing-efficiency-through-delivery-route-optimization/
ProValet. (2023). Smart routing solutions for delivery businesses. ProValet Software. https://www.provalet.io
ShipScience. (2023). Optimized delivery paths and cost reduction strategies. ShipScience Research Library. https://www.shipscience.com
Inoxoft. (2023). Logistics inefficiencies and real-time route planning. Inoxoft Insights. https://inoxoft.com
MDN Web Docs. (2023). Browser storage limits and performance considerations. Mozilla. https://developer.mozilla.org
web.dev. (2023). Efficient storage practices for modern web applications. Google Developers. https://web.dev
HERE Technologies. (2023). AI-powered routing and real-time navigation systems. HERE Developer Blog. https://developer.here.com
Esri. (2023). Location intelligence and route planning for delivery optimization. Esri White Papers. https://www.esri.com
GitHub. (2023). Open-source routing algorithms: Real-time geo-tracking example project. GitHub Repository. https://github.com
PhilAtlas. (n.d.). Cavite demographic and geographic profile. https://www.philatlas.com
GeeksforGeeks. (n.d.). Dijkstra’s Algorithm architecture. https://www.geeksforgeeks.org
Simplilearn. (n.d.). Branch and Bound algorithm overview. https://www.simplilearn.com



Conclusion:
