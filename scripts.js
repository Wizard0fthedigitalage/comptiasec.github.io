var questionSource = [
    // Previous questions (1-20) are assumed to be here...

    {
        question: "Question 21 : Which AWS service provides a fully managed NoSQL database?",
        choices: ["a. Amazon RDS", "b. Amazon DynamoDB", "c. Amazon Redshift", "d. Amazon Aurora"],
        answer: "b"
    },
    {
        question: "Question 22 : What is the purpose of AWS CloudTrail?",
        choices: ["a. To monitor application performance", "b. To track user activity and API usage", 
                   "c. To manage server instances", "d. To provide load balancing"],
        answer: "b"
    },
    {
        question: "Question 23 : Which AWS service is used for data warehousing?",
        choices: ["a. Amazon RDS", "b. Amazon Redshift", "c. Amazon S3", "d. Amazon DynamoDB"],
        answer: "b"
    },
    {
        question: "Question 24 : What is the AWS pricing model that charges based on usage?",
        choices: ["a. Reserved Pricing", "b. Pay-as-you-go", 
                   "c. Subscription Pricing", "d. Tiered Pricing"],
        answer: "b"
    },
    {
        question: "Question 25 : Which service can be used to automate infrastructure provisioning?",
        choices: ["a. AWS CloudFormation", "b. AWS OpsWorks", 
                   "c. AWS Elastic Beanstalk", "d. AWS CodeDeploy"],
        answer: "a"
    },
    {
        question: "Question 26 : What is a key benefit of using AWS Lambda?",
        choices: ["a. Requires server management", 
                   "b. Automatically scales in response to traffic",
                   "c. Always runs on dedicated servers",
                   "d. Requires upfront cost"],
        answer: "b"
    },
    {
        question: "Question 27 : What is the maximum duration for an AWS Lambda function?",
        choices: ["a. 1 minute", "b. 5 minutes", 
                   "c. 15 minutes", "d. 60 minutes"],
        answer: "c"
    },
    {
        question: "Question 28 : Which service provides a scalable file storage solution?",
        choices: ["a. Amazon S3", 
                   "b. Amazon EBS",
                   "c. Amazon Glacier",
                   "d. AWS Storage Gateway"],
        answer: "a"
    },
    {
        question: "Question 29 : What type of storage does Amazon EBS provide?",
        choices: ["a. Object storage", 
                   "b. Block storage",
                   "c. File storage",
                   "d. Archive storage"],
        answer: "b"
    },
    {
        question: "Question 30 : Which service allows you to create a virtual private network (VPN)?",
        choices: ["a. AWS Direct Connect", 
                   "b. AWS VPN",
                   "c. Amazon VPC Peering",
                   "d. Amazon Route 53"],
        answer: "b"
    },
    {
        question: "Question 31 : What is the purpose of AWS Trusted Advisor?",
        choices: ["a. To manage access permissions", 
                   "b. To provide security assessments and best practices",
                   "c. To monitor application performance",
                   "d. To automate deployments"],
        answer: "b"
    },
    {
        question: "Question 32 : Which service provides a managed Kubernetes environment?",
        choices: ["a. Amazon ECS", 
                   "b. Amazon EKS",
                   "c. AWS Lambda",
                   "d. AWS Batch"],
        answer: "b"
    },
    {
        question: 'Question 33 : What does the term “scalability” mean in cloud computing?',
        choices:['a) The ability to increase resources as needed', 
                 'b) The ability to secure data effectively', 
                 'c) The ability to maintain performance under load', 
                 'd) The ability to store large amounts of data'],
        answer:'a'
    },
    {
      question:'Question 34 : Which of the following is an example of a managed service?',
      choices:['a) EC2', 'b) S3', 'c) RDS', 'd) VPC'],
      answer:'c'
   },
   {
      question:'Question 35 : What is the main purpose of Amazon CloudFront?',
      choices:['a) Load balancing', 'b) Content delivery network (CDN)', 'c) Database management', 'd) Virtual machines'],
      answer:'b'
   },
   {
      question:'Question 36 : Which service allows you to run code in response to events?',
      choices:['a) AWS Lambda', 'b) EC2', 'c) ECS', 'd) S3'],
      answer:'a'
   },
   {
      question:'Question 37 : What is the function of the AWS Management Console?',
      choices:['a) Command-line interface for managing services', 
               'b) Web-based interface for managing AWS resources',
               'c) API for programmatic access to services',
               'd) CLI tool for deploying applications'],
      answer:'b'
   },
   {
      question:'Question 38 : Which of these services is used for continuous integration and continuous delivery (CI/CD)?',
      choices:['a) AWS CodePipeline', 
               'b) Amazon EC2',
               'c) Amazon RDS',
               'd) Amazon S3'],
      answer:'a'
   },
   {
      question:'Question 39 : What does the term “high availability” mean?',
      choices:['a) Resources are always available', 
               'b) Resources are available most of the time',
               'c) Resources are available with minimal downtime',
               'd) Resources are available in multiple regions'],
      answer:'c'
   },
   {
      question:'Question 40 : What is the primary benefit of using Amazon Aurora?',
      choices:['a) It is a NoSQL database', 
               'b) It offers high performance and availability',
               'c) It requires manual backups',
               'd) It is only available in one region'],
      answer:'b'
   },
   {
       question:"Question 41 : Which service can be used to send notifications based on events in your applications?",
       choices:["a. Amazon SNS", 
                "b. Amazon SQS",
                "c. AWS Lambda",
                "d. Amazon CloudWatch"],
       answer:"a"
   },
   {
       question:"Question 42 : Which feature allows you to define security policies for your resources?",
       choices:["a. IAM Roles",
                "b. Security Groups",
                "c. VPC Peering",
                "d. Network ACLs"],
       answer:"b"
   },
   {
       question:"Question 43 : What type of database does Amazon DynamoDB provide?",
       choices:["a. Relational database",
                "b. NoSQL database",
                "c. In-memory database",
                "d. Time-series database"],
       answer:"b"
   },
   {
       question:"Question 44 : Which service helps you manage your application's health and performance?",
       choices:["a. AWS CloudTrail",
                "b. Amazon CloudWatch",
                "c. AWS Config",
                "d. AWS Systems Manager"],
       answer:"b"
   },
   {
       question:"Question 45 : What does EBS stand for in AWS terminology?",
       choices:["a. Elastic Block Storage",
                "b. Elastic Backup Service",
                "c. Enhanced Backup Storage",
                "d. Elastic Blob Storage"],
       answer:"a"
   },
   {
       question:"Question 46 : Which service provides a fully managed graph database?",
       choices:["a. Amazon Neptune",
                "b. Amazon RDS",
                "c. Amazon DynamoDB",
                "d. Amazon ElastiCache"],
       answer:"a"
   },
   {
       question:"Question 47 : What is a key benefit of using Elastic Load Balancing (ELB)?",
       choices:["a. Automatic scaling of instances",
                "b. Distributing incoming application traffic across multiple targets",
                "c. Managing user permissions and access control",
                "d .Storing large amounts of data securely"],
       answer:"b"
   },
   {
       question:"Question 48 : Which AWS service can help you migrate databases to AWS easily?",
       choices:["a .AWS Database Migration Service (DMS)",
                “ b .Amazon RDS”,
                “ c .Amazon Aurora”,
                “ d .AWS Snowball”],
       answer:"a"
   },
   {
       question:"Question 49 : What does it mean when an instance is ‘terminated’ in EC2?",
       choices:[" a .The instance is stopped temporarily.",
                “ b .The instance is deleted permanently.”,
                “ c .The instance is rebooted.”,
                “ d .The instance is put into hibernation.”],
       answer:"b"
   },

   // Continuing with more questions...

   {
       question:"Question 50 : Which feature allows you to create multiple isolated environments within a single VPC?",
       choices:[" a .Subnets"," b .Security Groups"," c .Route Tables"," d .Network ACLs"],
       answer:"a"
   },

   {
       question:"Question 51 : In which layer of the OSI model does AWS Direct Connect operate?",
       choices:[" a .Physical Layer"," b .Data Link Layer"," c .Network Layer"," d .Transport Layer"],
       answer:"a"
   },

   {
       question:"Question 52 : Which service can be used to analyze log files and gain insights from them?",
       choices:[" a .Amazon Athena"," b .Amazon Redshift"," c .AWS Glue"," d .Amazon EMR"],
       answer:"a"
   },

   {
       question:"Question 53 : What does the term ‘multi-tenancy’ refer to in cloud computing?",
       choices:[" a .Multiple customers sharing the same infrastructure"," b .Single customer using multiple resources"," c .Dedicated resources for each customer"," d .None of the above"],
       answer:"a"
   },

   {
       question:"Question 54 : Which service provides a way to automate software deployments on EC2 instances?",
       choices:[" a .AWS CodeDeploy"," b .AWS Elastic Beanstalk"," c .AWS CloudFormation"," d .AWS OpsWorks"],
       answer:"a"
   },

   {
       question:"Question 55 : What type of scaling allows you to add or remove resources based on demand automatically?",
       choices:[" a .Vertical Scaling"," b .Horizontal Scaling"," c .Auto Scaling"," d .Manual Scaling"],
       answer:"c"
   },

   {
       question:"Question 56 : Which feature allows you to connect your on-premises network directly to your VPC?",
       choices:[" a .AWS VPN"," b .AWS Direct Connect"," c .VPC Peering"," d .AWS Transit Gateway"],
       answer:"b"
   },

   {
       question:"Question 57 : What type of instances are designed for compute-intensive workloads in EC2?",
       choices:[" a .General Purpose Instances"," b .Compute Optimized Instances"," c .Memory Optimized Instances"," d .Storage Optimized Instances"],
       answer:"b"
   },

   {
     question:'Question 58 : In which scenario would you use an Elastic IP address?',
     choices:[' a ) For static IP addresses that can be associated with any instance',' b ) For dynamic IP addresses that change frequently',' c ) For internal communication between instances',' d ) For load balancing traffic'],
     answer:'a'
},

{
     question:'Question 59 : Which service provides automated backups for your RDS databases?',
     choices:[' a ) Automated Backups',' b ) Manual Snapshots',' c ) Multi-AZ Deployments',' d ) Read Replicas'],
     answer:'a'
},

{
     question:'Question 60 : How can you secure data at rest in S3?',
     choices:[' a ) By using versioning',' b ) By enabling bucket policies',' c ) By using server-side encryption',' d ) By configuring lifecycle policies'],
     answer:'c'
},

{
     question:'Question 61 : What does the term “serverless” mean in cloud computing?',
     choices:[' a ) No servers are used at all',' b ) Users do not manage servers directly',' c ) All applications are hosted on virtual machines',' d ) Servers are managed by third-party providers'],
     answer:'b'
},

{
     question:'Question 62 : How does Amazon S3 achieve durability?',
     choices:[' a ) By replicating data across multiple Availability Zones',' b ) By using RAID configurations',' c ) By storing data on physical disks only',' d ) By implementing backup strategies'],
     answer:'a'
},

{
     question:'Question 63 : Which tool helps visualize your cloud architecture and services?',
     choices:[' a ) AWS Architecture Icons',' b ) AWS Well-Architected Tool',' c ) AWS Management Console',' d ) AWS Cost Explorer'],
     answer:'a'
},

{
     question:'Question 64 : In which scenario would you use an Application Load Balancer (ALB)?',
     choices:[' a ) For HTTP/HTTPS traffic routing based on content',' b ) For TCP traffic routing only',' c ) For static IP address assignment',' d ) For SSL termination only'],
     answer:'a'
},

{
     question:'Question 65 : What type of storage does Amazon S3 provide?',
     choices:[' a ) Block storage',' b ) Object storage',' c ) File storage',' d ) Archive storage'],
     answer:'b'
},

{
     question:'Question 66 : How can you ensure high availability for your application in multiple regions?',
     choices:[' a ) By deploying resources in multiple Availability Zones within one region only',' b ) By deploying resources across multiple regions and using Route53 for DNS failover',' c ) By using only one region with high capacity instances',' d ) By relying solely on auto-scaling groups'],
     answer:'b'
},

{
     question:'Question 67 : What is an important feature of IAM Roles?',
     choices:[' a ) They provide temporary security credentials',' b ) They require long-term access keys',' c ) They cannot be assigned to EC2 instances',' d ) They are only applicable for root users'],
     answer:'a'
},

{
     question:'Question 68 : How can you monitor application performance in real-time?',
     choices:[' a ) Using CloudTrail logs only',' b ) Using CloudWatch metrics and alarms',' c ) Using S3 bucket logging only',' d ) Using EC2 instance monitoring tools only'],
     answer:'b'
},

{
     question:'Question 69 : Which service provides distributed denial-of-service (DDoS) protection?',
     choices:[' a ) AWS Shield',' b ) AWS WAF',' c ) Amazon Inspector',' d ) AWS Config'],
     answer:'a'
},

{
     question:'Question 70 : Which feature allows you to store frequently accessed data closer to your application servers?',
     choices:[' a ) Caching with ElastiCache ',' b ) Data replication with S3 ',' c ) Data archiving with Glacier ',' d ) Data compression with RDS'],
     answer:'a'
},

{
     question:'Question 71 : In which scenario would you use an On-Demand Instance?',
     choices:[' a ) When you need predictable workloads ',' b ) When workloads vary significantly ',' c ) When cost savings are critical ',' d ) When workloads require reserved capacity'],
     answer:'b'
},

{
     question:'Question 72 : How can you restrict access to specific IP addresses in your VPC?',
     choices:[' a.) Security Groups ',' b.) Network ACLs ',' c.) IAM Policies ',' d.) Route Tables'],
     answer:'b'
},

{
     question:' Question73:Which tool helps visualize costs over time and usage patterns?',
choices:[' a.) Cost Explorer ',' b.) Trusted Advisor ',' c.) Billing Dashboard ',' d.) Budgets'],
answer :'a'  
},

{
question :' Question74:What type of instance should you choose for memory-intensive applications? ',
choices:[ ' a.) Compute Optimized Instances ',  
' b.) Memory Optimized Instances ',  
' c.) General Purpose Instances ',  
' d.) Storage Optimized Instances'],  
answer :' b'  
},

{
question :' Question75.What is the purpose of an IAM policy? ',
choices:[  
' a.) To define permissions for users or roles ',  
' b.) To manage billing information ',  
' c.) To configure network settings ',  
' d.) To monitor system performance'],  
answer :' a'  
},

{
question :' Question76.What does it mean when an EBS volume is “attached”? ',
choices:[  
' a.) The volume is mounted to an EC2 instance ',  
' b.) The volume is deleted from your account ',  
' c.) The volume is backed up automatically ',  
' d.) The volume cannot be accessed'],  
answer :' a'  
},

{
question :' Question77.What type of load balancer operates at Layer 7? ',
choices:[  
' a.) Classic Load Balancer ',  
' b.) Application Load Balancer ',  
' c.) Network Load Balancer ',  
' d.) Gateway Load Balancer'],  
answer :' b'  
},

{
question :' Question78.What feature allows you to create custom domain names for your APIs? ',
choices:[  
' a.) API Gateway ',  
' b.) Route53 ',  
' c.) AppSync ',  
' d.) Lambda'],  
answer :' a'   
}, 

{
question :' Question79.How can you optimize costs when using EC2? ',
choices:[  
' a.) Use Reserved Instances ',   
' b.) Use On-Demand Instances only ',   
' c.) Use Spot Instances exclusively ',   
' d.) Use Dedicated Hosts'],   
answer :' a'   
}, 

{
question :' Question80.What type of storage class should you choose for infrequently accessed data? ',
choices:[   
'a.) Standard Storage Class ',   
'b.) Intelligent-Tiering Storage Class ',   
'c.) One Zone-IA Storage Class ',   
'd.) Glacier Storage Class'],   
answer :' c'   
}, 

{    
question :' Question81.What does it mean when an instance state shows “stopping”? ',
choices:[    
'a.) The instance has been terminated ',    
'b.) The instance is being shut down ',    
'c.) The instance has been rebooted ',    
'd.) The instance is running normally'],    
answer :' b'   
}, 

{    
question :' Question82.What service would you use for real-time streaming data processing? ',
choices:[    
'a.) Kinesis Data Streams ',    
'b.) SQS ',    
'c.) SNS ',    
'd.) DynamoDB Streams'],    
answer :' a'   
}, 

{    
question :' Question83.What kind of attack does WAF help protect against? ',
choices:[    
'a.) DDoS attacks ',    
'b.) SQL injection attacks ',    
'c.) Phishing attacks ',    
'd.) Man-in-the-middle attacks'],    
answer :' b'   
}, 

{    
question :' Question84.What tool would you use to analyze security vulnerabilities? ',
choices:[    
'a.) Inspector ',

