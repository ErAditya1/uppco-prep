// ============================================================
// UP Police Computer Operator Grade-A Study Tracker — app.js
// ============================================================

const STUDY_DATA = {
  subjects: [
    {
      id: 'computer-science',
      name: 'Computer Science',
      shortName: 'CS',
      weight: 50,
      icon: '💻',
      color: '#6366f1',
      chapters: [
        {
          id: 'cs-fundamentals',
          name: 'Computer Fundamentals & Organization',
          importance: 12,
          topics: [
            { id: 'cs-fund-history', name: 'Computer History' },
            { id: 'cs-fund-generations', name: 'Generations of Computers' },
            { id: 'cs-fund-classification', name: 'Computer Classification' },
            { id: 'cs-fund-characteristics', name: 'Characteristics of Computers' },
            { id: 'cs-fund-applications', name: 'Applications of Computers' },
            { id: 'cs-fund-organization', name: 'Computer Organization' },
            { id: 'cs-fund-cpu', name: 'CPU (Central Processing Unit)' },
            { id: 'cs-fund-alu', name: 'ALU (Arithmetic Logic Unit)' },
            { id: 'cs-fund-cu', name: 'CU (Control Unit)' },
            { id: 'cs-fund-registers', name: 'Registers' },
            { id: 'cs-fund-hardware', name: 'Hardware' },
            { id: 'cs-fund-software', name: 'Software' },
            { id: 'cs-fund-firmware', name: 'Firmware' },
            { id: 'cs-fund-system-sw', name: 'System Software' },
            { id: 'cs-fund-app-sw', name: 'Application Software' },
            { id: 'cs-fund-utility-sw', name: 'Utility Software' },
            { id: 'cs-fund-input', name: 'Input Devices' },
            { id: 'cs-fund-output', name: 'Output Devices' },
            { id: 'cs-fund-storage', name: 'Storage Devices' },
            { id: 'cs-fund-peripheral', name: 'Peripheral Devices' },
            { id: 'cs-fund-motherboard', name: 'Motherboard' },
            { id: 'cs-fund-memory', name: 'Memory' },
            { id: 'cs-fund-cache', name: 'Cache Memory' },
            { id: 'cs-fund-ports', name: 'Ports' },
            { id: 'cs-fund-bios', name: 'BIOS / UEFI' },
            { id: 'cs-fund-booting', name: 'Booting Process' },
            { id: 'cs-fund-data-info', name: 'Data vs Information' }
          ]
        },
        {
          id: 'cs-number-system',
          name: 'Number System + Data Representation',
          importance: 7,
          topics: [
            { id: 'cs-num-decimal', name: 'Decimal Number System' },
            { id: 'cs-num-binary', name: 'Binary Number System' },
            { id: 'cs-num-octal', name: 'Octal Number System' },
            { id: 'cs-num-hex', name: 'Hexadecimal Number System' },
            { id: 'cs-num-conversion', name: 'Number Base Conversion' },
            { id: 'cs-num-bin-add', name: 'Binary Addition' },
            { id: 'cs-num-bin-sub', name: 'Binary Subtraction' },
            { id: 'cs-num-bin-mul', name: 'Binary Multiplication' },
            { id: 'cs-num-bin-div', name: 'Binary Division' },
            { id: 'cs-num-1s-comp', name: "1's Complement" },
            { id: 'cs-num-2s-comp', name: "2's Complement" },
            { id: 'cs-num-bcd', name: 'BCD (Binary Coded Decimal)' },
            { id: 'cs-num-ascii', name: 'ASCII Code' },
            { id: 'cs-num-unicode', name: 'Unicode' },
            { id: 'cs-num-data-rep', name: 'Data Representation' },
            { id: 'cs-num-memory-units', name: 'Memory Units (KB, MB, GB, TB)' }
          ]
        },
        {
          id: 'cs-dbms',
          name: 'DBMS + SQL + Database Concepts',
          importance: 14,
          topics: [
            { id: 'cs-db-database', name: 'Database' },
            { id: 'cs-db-dbms', name: 'DBMS' },
            { id: 'cs-db-rdbms', name: 'RDBMS' },
            { id: 'cs-db-data-org', name: 'Data Organization' },
            { id: 'cs-db-data-hierarchy', name: 'Data Hierarchy' },
            { id: 'cs-db-file-mgmt', name: 'File Management' },
            { id: 'cs-db-file', name: 'File' },
            { id: 'cs-db-directory', name: 'Directory' },
            { id: 'cs-db-records', name: 'Records' },
            { id: 'cs-db-fields', name: 'Fields' },
            { id: 'cs-db-tables', name: 'Tables' },
            { id: 'cs-db-rows', name: 'Rows' },
            { id: 'cs-db-columns', name: 'Columns' },
            { id: 'cs-db-relational', name: 'Relational Model' },
            { id: 'cs-db-relation', name: 'Relation' },
            { id: 'cs-db-tuple', name: 'Tuple' },
            { id: 'cs-db-attribute', name: 'Attribute' },
            { id: 'cs-db-domain', name: 'Domain' },
            { id: 'cs-db-cardinality', name: 'Cardinality' },
            { id: 'cs-db-primary-key', name: 'Primary Key' },
            { id: 'cs-db-foreign-key', name: 'Foreign Key' },
            { id: 'cs-db-candidate-key', name: 'Candidate Key' },
            { id: 'cs-db-super-key', name: 'Super Key' },
            { id: 'cs-db-composite-key', name: 'Composite Key' },
            { id: 'cs-db-sql', name: 'SQL Overview' },
            { id: 'cs-db-ddl', name: 'DDL (Data Definition Language)' },
            { id: 'cs-db-dml', name: 'DML (Data Manipulation Language)' },
            { id: 'cs-db-dcl', name: 'DCL (Data Control Language)' },
            { id: 'cs-db-tcl', name: 'TCL (Transaction Control Language)' },
            { id: 'cs-db-select', name: 'SELECT Statement' },
            { id: 'cs-db-insert', name: 'INSERT Statement' },
            { id: 'cs-db-update', name: 'UPDATE Statement' },
            { id: 'cs-db-delete', name: 'DELETE Statement' },
            { id: 'cs-db-where', name: 'WHERE Clause' },
            { id: 'cs-db-group-by', name: 'GROUP BY Clause' },
            { id: 'cs-db-order-by', name: 'ORDER BY Clause' },
            { id: 'cs-db-join', name: 'JOIN Operations' },
            { id: 'cs-db-aggregate', name: 'Aggregate Functions' },
            { id: 'cs-db-constraints', name: 'Constraints' },
            { id: 'cs-db-foxpro', name: 'FoxPro Basics' },
            { id: 'cs-db-oracle', name: 'Oracle Basics' }
          ]
        },
        {
          id: 'cs-networks',
          name: 'Computer Networks + OSI + Security',
          importance: 14,
          topics: [
            { id: 'cs-net-basics', name: 'Networking Basics' },
            { id: 'cs-net-pan', name: 'PAN (Personal Area Network)' },
            { id: 'cs-net-lan', name: 'LAN (Local Area Network)' },
            { id: 'cs-net-man', name: 'MAN (Metropolitan Area Network)' },
            { id: 'cs-net-wan', name: 'WAN (Wide Area Network)' },
            { id: 'cs-net-topology', name: 'Network Topology' },
            { id: 'cs-net-bus', name: 'Bus Topology' },
            { id: 'cs-net-star', name: 'Star Topology' },
            { id: 'cs-net-ring', name: 'Ring Topology' },
            { id: 'cs-net-mesh', name: 'Mesh Topology' },
            { id: 'cs-net-tree', name: 'Tree Topology' },
            { id: 'cs-net-hybrid', name: 'Hybrid Topology' },
            { id: 'cs-net-hub', name: 'Hub' },
            { id: 'cs-net-switch', name: 'Switch' },
            { id: 'cs-net-router', name: 'Router' },
            { id: 'cs-net-repeater', name: 'Repeater' },
            { id: 'cs-net-bridge', name: 'Bridge' },
            { id: 'cs-net-gateway', name: 'Gateway' },
            { id: 'cs-net-modem', name: 'Modem' },
            { id: 'cs-net-access-point', name: 'Access Point' },
            { id: 'cs-net-osi', name: 'OSI 7 Layers' },
            { id: 'cs-net-tcpip', name: 'TCP/IP Model' },
            { id: 'cs-net-tcp', name: 'TCP Protocol' },
            { id: 'cs-net-udp', name: 'UDP Protocol' },
            { id: 'cs-net-ip', name: 'IP Protocol' },
            { id: 'cs-net-ipv4', name: 'IPv4' },
            { id: 'cs-net-ipv6', name: 'IPv6' },
            { id: 'cs-net-mac', name: 'MAC Address' },
            { id: 'cs-net-arp', name: 'ARP Protocol' },
            { id: 'cs-net-dns', name: 'DNS' },
            { id: 'cs-net-dhcp', name: 'DHCP' },
            { id: 'cs-net-http', name: 'HTTP Protocol' },
            { id: 'cs-net-https', name: 'HTTPS Protocol' },
            { id: 'cs-net-ftp', name: 'FTP Protocol' },
            { id: 'cs-net-smtp', name: 'SMTP Protocol' },
            { id: 'cs-net-pop3', name: 'POP3 Protocol' },
            { id: 'cs-net-imap', name: 'IMAP Protocol' },
            { id: 'cs-net-ssh', name: 'SSH Protocol' },
            { id: 'cs-net-telnet', name: 'Telnet' },
            { id: 'cs-net-ports', name: 'Network Ports' },
            { id: 'cs-net-socket', name: 'Socket' },
            { id: 'cs-net-nat', name: 'NAT (Network Address Translation)' },
            { id: 'cs-net-routing', name: 'Routing' },
            { id: 'cs-net-switching', name: 'Switching' },
            { id: 'cs-net-subnetting', name: 'Subnetting' },
            { id: 'cs-net-security', name: 'Network Security' },
            { id: 'cs-net-firewall', name: 'Firewall' },
            { id: 'cs-net-vpn', name: 'VPN' },
            { id: 'cs-net-proxy', name: 'Proxy Server' },
            { id: 'cs-net-risk', name: 'Risk Assessment' }
          ]
        },
        {
          id: 'cs-os',
          name: 'Operating Systems + Windows/Unix/Linux',
          importance: 8,
          topics: [
            { id: 'cs-os-fundamentals', name: 'OS Fundamentals' },
            { id: 'cs-os-types', name: 'Types of Operating Systems' },
            { id: 'cs-os-windows', name: 'Windows OS' },
            { id: 'cs-os-linux', name: 'Linux OS' },
            { id: 'cs-os-unix', name: 'Unix OS' },
            { id: 'cs-os-mobile-os', name: 'Mobile OS' },
            { id: 'cs-os-processes', name: 'Processes' },
            { id: 'cs-os-threads', name: 'Threads' },
            { id: 'cs-os-process-mgmt', name: 'Process Management' },
            { id: 'cs-os-cpu-scheduling', name: 'CPU Scheduling' },
            { id: 'cs-os-memory-mgmt', name: 'Memory Management' },
            { id: 'cs-os-virtual-memory', name: 'Virtual Memory' },
            { id: 'cs-os-file-systems', name: 'File Systems' },
            { id: 'cs-os-files-dirs', name: 'Files and Directories' },
            { id: 'cs-os-deadlock', name: 'Deadlock' },
            { id: 'cs-os-security', name: 'OS Security' },
            { id: 'cs-os-user-mgmt', name: 'User Management' },
            { id: 'cs-os-utilities', name: 'System Utilities' },
            { id: 'cs-os-cmd', name: 'Command Line Interface' },
            { id: 'cs-os-win-cmds', name: 'Windows Commands' },
            { id: 'cs-os-linux-cmds', name: 'Linux Commands' },
            { id: 'cs-os-boot', name: 'Boot Process' },
            { id: 'cs-os-gui-cli', name: 'GUI vs CLI' }
          ]
        },
        {
          id: 'cs-internet-web',
          name: 'Internet + Web Technology + HTML + JavaScript',
          importance: 9,
          topics: [
            { id: 'cs-web-internet', name: 'Internet' },
            { id: 'cs-web-intranet', name: 'Intranet' },
            { id: 'cs-web-extranet', name: 'Extranet' },
            { id: 'cs-web-www', name: 'WWW (World Wide Web)' },
            { id: 'cs-web-browser', name: 'Web Browser' },
            { id: 'cs-web-search-engine', name: 'Search Engine' },
            { id: 'cs-web-url', name: 'URL (Uniform Resource Locator)' },
            { id: 'cs-web-uri', name: 'URI (Uniform Resource Identifier)' },
            { id: 'cs-web-domain', name: 'Domain Name' },
            { id: 'cs-web-dns', name: 'DNS (Web Context)' },
            { id: 'cs-web-http-https', name: 'HTTP / HTTPS' },
            { id: 'cs-web-cookies', name: 'Cookies' },
            { id: 'cs-web-cache', name: 'Web Cache' },
            { id: 'cs-web-sessions', name: 'Sessions' },
            { id: 'cs-web-server', name: 'Web Server' },
            { id: 'cs-web-hosting', name: 'Web Hosting' },
            { id: 'cs-web-email', name: 'Email' },
            { id: 'cs-web-email-protocols', name: 'Email Protocols' },
            { id: 'cs-web-ecommerce', name: 'E-commerce' },
            { id: 'cs-web-ebanking', name: 'E-banking' },
            { id: 'cs-web-elearning', name: 'E-learning' },
            { id: 'cs-web-digital-services', name: 'Digital Services' },
            { id: 'cs-web-html', name: 'HTML Basics' },
            { id: 'cs-web-html5', name: 'HTML5' },
            { id: 'cs-web-tags', name: 'HTML Tags' },
            { id: 'cs-web-elements', name: 'HTML Elements' },
            { id: 'cs-web-attributes', name: 'HTML Attributes' },
            { id: 'cs-web-headings', name: 'HTML Headings' },
            { id: 'cs-web-paragraphs', name: 'HTML Paragraphs' },
            { id: 'cs-web-links', name: 'HTML Links' },
            { id: 'cs-web-images', name: 'HTML Images' },
            { id: 'cs-web-lists', name: 'HTML Lists' },
            { id: 'cs-web-tables', name: 'HTML Tables' },
            { id: 'cs-web-forms', name: 'HTML Forms' },
            { id: 'cs-web-input-controls', name: 'Input Controls' },
            { id: 'cs-web-js', name: 'JavaScript Basics' },
            { id: 'cs-web-js-vars', name: 'JS Variables' },
            { id: 'cs-web-js-types', name: 'JS Data Types' },
            { id: 'cs-web-js-ops', name: 'JS Operators' },
            { id: 'cs-web-js-conditions', name: 'JS Conditions' },
            { id: 'cs-web-js-loops', name: 'JS Loops' },
            { id: 'cs-web-js-functions', name: 'JS Functions' },
            { id: 'cs-web-js-events', name: 'JS Events' },
            { id: 'cs-web-js-dom', name: 'DOM Basics' },
            { id: 'cs-web-js-browser', name: 'Browser-side Scripting' }
          ]
        },
        {
          id: 'cs-boolean',
          name: 'Boolean Algebra + Logic Gates + K-Map',
          importance: 10,
          topics: [
            { id: 'cs-bool-basics', name: 'Boolean Basics' },
            { id: 'cs-bool-and', name: 'AND Gate' },
            { id: 'cs-bool-or', name: 'OR Gate' },
            { id: 'cs-bool-not', name: 'NOT Gate' },
            { id: 'cs-bool-nand', name: 'NAND Gate' },
            { id: 'cs-bool-nor', name: 'NOR Gate' },
            { id: 'cs-bool-xor', name: 'XOR Gate' },
            { id: 'cs-bool-xnor', name: 'XNOR Gate' },
            { id: 'cs-bool-truth-tables', name: 'Truth Tables' },
            { id: 'cs-bool-expressions', name: 'Boolean Expressions' },
            { id: 'cs-bool-laws', name: 'Boolean Laws' },
            { id: 'cs-bool-identity', name: 'Identity Law' },
            { id: 'cs-bool-null', name: 'Null Law' },
            { id: 'cs-bool-idempotent', name: 'Idempotent Law' },
            { id: 'cs-bool-complement', name: 'Complement Law' },
            { id: 'cs-bool-involution', name: 'Involution Law' },
            { id: 'cs-bool-commutative', name: 'Commutative Law' },
            { id: 'cs-bool-associative', name: 'Associative Law' },
            { id: 'cs-bool-distributive', name: 'Distributive Law' },
            { id: 'cs-bool-absorption', name: 'Absorption Law' },
            { id: 'cs-bool-closure', name: 'Closure Property' },
            { id: 'cs-bool-sop', name: 'SOP (Sum of Products)' },
            { id: 'cs-bool-pos', name: 'POS (Product of Sums)' },
            { id: 'cs-bool-minterms', name: 'Minterms' },
            { id: 'cs-bool-maxterms', name: 'Maxterms' },
            { id: 'cs-bool-kmap', name: 'K-Map (Karnaugh Map)' },
            { id: 'cs-bool-kmap-2', name: '2-Variable K-Map' },
            { id: 'cs-bool-kmap-3', name: '3-Variable K-Map' },
            { id: 'cs-bool-kmap-4', name: '4-Variable K-Map' },
            { id: 'cs-bool-dont-care', name: "Don't-Care Conditions" },
            { id: 'cs-bool-simplification', name: 'Boolean Simplification' }
          ]
        },
        {
          id: 'cs-data-structures',
          name: 'Data Structures: Array + Stack + Queue',
          importance: 7,
          topics: [
            { id: 'cs-ds-1d-array', name: '1-D Array' },
            { id: 'cs-ds-2d-array', name: '2-D Array' },
            { id: 'cs-ds-indexing', name: 'Array Indexing' },
            { id: 'cs-ds-traversal', name: 'Traversal' },
            { id: 'cs-ds-searching', name: 'Searching' },
            { id: 'cs-ds-insertion', name: 'Insertion' },
            { id: 'cs-ds-deletion', name: 'Deletion' },
            { id: 'cs-ds-memory-rep', name: 'Memory Representation' },
            { id: 'cs-ds-stack', name: 'Stack' },
            { id: 'cs-ds-lifo', name: 'LIFO Principle' },
            { id: 'cs-ds-push', name: 'Push Operation' },
            { id: 'cs-ds-pop', name: 'Pop Operation' },
            { id: 'cs-ds-peek', name: 'Peek Operation' },
            { id: 'cs-ds-overflow', name: 'Stack Overflow' },
            { id: 'cs-ds-underflow', name: 'Stack Underflow' },
            { id: 'cs-ds-stack-apps', name: 'Stack Applications' },
            { id: 'cs-ds-queue', name: 'Queue' },
            { id: 'cs-ds-fifo', name: 'FIFO Principle' },
            { id: 'cs-ds-enqueue', name: 'Enqueue Operation' },
            { id: 'cs-ds-dequeue', name: 'Dequeue Operation' },
            { id: 'cs-ds-front', name: 'Front Pointer' },
            { id: 'cs-ds-rear', name: 'Rear Pointer' },
            { id: 'cs-ds-queue-impl', name: 'Queue Implementation' },
            { id: 'cs-ds-queue-apps', name: 'Queue Applications' },
            { id: 'cs-ds-circular-queue', name: 'Circular Queue' },
            { id: 'cs-ds-linked-list', name: 'Linked List' },
            { id: 'cs-ds-tree', name: 'Tree Data Structure' },
            { id: 'cs-ds-sorting', name: 'Basic Searching & Sorting' }
          ]
        },
        {
          id: 'cs-office',
          name: 'Office Automation + MS Office + OpenOffice',
          importance: 6,
          topics: [
            { id: 'cs-off-automation', name: 'Office Automation' },
            { id: 'cs-off-edc', name: 'Electronic Data Capture' },
            { id: 'cs-off-storage', name: 'Electronic Storage' },
            { id: 'cs-off-graphics', name: 'Graphics in Office' },
            { id: 'cs-off-gui', name: 'GUI Concepts' },
            { id: 'cs-off-edi', name: 'EDI (Electronic Data Interchange)' },
            { id: 'cs-off-word', name: 'MS Word Overview' },
            { id: 'cs-off-word-doc', name: 'Document Creation & Editing' },
            { id: 'cs-off-word-format', name: 'Formatting (Font, Paragraph)' },
            { id: 'cs-off-word-align', name: 'Alignment & Indentation' },
            { id: 'cs-off-word-tables', name: 'Tables in Word' },
            { id: 'cs-off-word-layout', name: 'Page Layout' },
            { id: 'cs-off-word-hf', name: 'Header & Footer' },
            { id: 'cs-off-word-find', name: 'Find & Replace' },
            { id: 'cs-off-word-merge', name: 'Mail Merge' },
            { id: 'cs-off-word-print', name: 'Printing' },
            { id: 'cs-off-word-shortcuts', name: 'Word Shortcuts' },
            { id: 'cs-off-excel', name: 'MS Excel Overview' },
            { id: 'cs-off-excel-wb', name: 'Workbook & Worksheet' },
            { id: 'cs-off-excel-cells', name: 'Rows, Columns & Cells' },
            { id: 'cs-off-excel-ref', name: 'Relative & Absolute Reference' },
            { id: 'cs-off-excel-formula', name: 'Formulas' },
            { id: 'cs-off-excel-funcs', name: 'Functions (SUM, AVERAGE, COUNT, MAX, MIN, IF)' },
            { id: 'cs-off-excel-sort', name: 'Sorting & Filtering' },
            { id: 'cs-off-excel-charts', name: 'Charts' },
            { id: 'cs-off-ppt', name: 'PowerPoint Overview' },
            { id: 'cs-off-ppt-slides', name: 'Slides & Layouts' },
            { id: 'cs-off-ppt-themes', name: 'Themes & Transitions' },
            { id: 'cs-off-ppt-animations', name: 'Animations' },
            { id: 'cs-off-ppt-master', name: 'Slide Master' },
            { id: 'cs-off-access', name: 'MS Access' },
            { id: 'cs-off-access-qfr', name: 'Access: Table, Query, Form, Report' },
            { id: 'cs-off-oo', name: 'OpenOffice Suite' },
            { id: 'cs-off-oo-writer', name: 'Writer (OpenOffice)' },
            { id: 'cs-off-oo-calc', name: 'Calc (OpenOffice)' },
            { id: 'cs-off-oo-impress', name: 'Impress (OpenOffice)' },
            { id: 'cs-off-unicode', name: 'Unicode & Fonts' },
            { id: 'cs-off-file-exchange', name: 'File Exchange Formats' }
          ]
        },
        {
          id: 'cs-algorithms',
          name: 'Algorithms + Flowcharts',
          importance: 3,
          topics: [
            { id: 'cs-algo-definition', name: 'Algorithm Definition' },
            { id: 'cs-algo-characteristics', name: 'Characteristics of Algorithm' },
            { id: 'cs-algo-io', name: 'Input / Output' },
            { id: 'cs-algo-steps', name: 'Steps in Algorithm' },
            { id: 'cs-algo-termination', name: 'Termination' },
            { id: 'cs-algo-correctness', name: 'Correctness' },
            { id: 'cs-flow-symbols', name: 'Flowchart Symbols' },
            { id: 'cs-flow-start-stop', name: 'Start / Stop Symbol' },
            { id: 'cs-flow-process', name: 'Process Symbol' },
            { id: 'cs-flow-io', name: 'Input/Output Symbol' },
            { id: 'cs-flow-decision', name: 'Decision Symbol' },
            { id: 'cs-flow-lines', name: 'Flow Lines' },
            { id: 'cs-flow-loops', name: 'Loops in Flowcharts' },
            { id: 'cs-flow-problems', name: 'Basic Flowchart Problems' },
            { id: 'cs-flow-pseudocode', name: 'Pseudocode' }
          ]
        },
        {
          id: 'cs-ai-iot',
          name: 'AI + IoT + Mobile Computing + Green Computing',
          importance: 4,
          topics: [
            { id: 'cs-ai-def', name: 'Artificial Intelligence' },
            { id: 'cs-ai-apps', name: 'AI Applications' },
            { id: 'cs-ai-expert', name: 'Expert Systems' },
            { id: 'cs-ai-ml', name: 'Machine Learning Basics' },
            { id: 'cs-ai-devices', name: 'Computer-Controlled Devices' },
            { id: 'cs-ai-sensors', name: 'Sensors' },
            { id: 'cs-ai-embedded', name: 'Embedded Systems' },
            { id: 'cs-iot-def', name: 'IoT (Internet of Things)' },
            { id: 'cs-iot-devices', name: 'Connected Devices' },
            { id: 'cs-iot-comm', name: 'IoT Communication' },
            { id: 'cs-iot-smart', name: 'Smart Devices' },
            { id: 'cs-mob-computing', name: 'Mobile Computing' },
            { id: 'cs-mob-smartphones', name: 'Smartphones' },
            { id: 'cs-mob-os', name: 'Mobile OS' },
            { id: 'cs-mob-apps', name: 'Mobile Applications' },
            { id: 'cs-mob-wireless', name: 'Wireless Computing' },
            { id: 'cs-mob-internet', name: 'Mobile Internet' },
            { id: 'cs-mob-security', name: 'Mobile Security' },
            { id: 'cs-green-it', name: 'Green IT' },
            { id: 'cs-green-energy', name: 'Energy-Efficient Computing' },
            { id: 'cs-green-ewaste', name: 'E-Waste' },
            { id: 'cs-green-sustainable', name: 'Sustainable Computing' },
            { id: 'cs-green-power', name: 'Power Management' }
          ]
        },
        {
          id: 'cs-cryptography',
          name: 'Cryptography',
          importance: 2,
          topics: [
            { id: 'cs-crypt-plaintext', name: 'Plaintext' },
            { id: 'cs-crypt-ciphertext', name: 'Ciphertext' },
            { id: 'cs-crypt-encryption', name: 'Encryption' },
            { id: 'cs-crypt-decryption', name: 'Decryption' },
            { id: 'cs-crypt-key', name: 'Cryptographic Key' },
            { id: 'cs-crypt-algorithm', name: 'Cryptographic Algorithm' },
            { id: 'cs-crypt-symmetric', name: 'Symmetric Encryption' },
            { id: 'cs-crypt-asymmetric', name: 'Asymmetric Encryption' },
            { id: 'cs-crypt-hashing', name: 'Hashing' },
            { id: 'cs-crypt-digital-sig', name: 'Digital Signature' },
            { id: 'cs-crypt-auth', name: 'Authentication' },
            { id: 'cs-crypt-confidentiality', name: 'Confidentiality' }
          ]
        },
        {
          id: 'cs-blockchain',
          name: 'Blockchain',
          importance: 2,
          topics: [
            { id: 'cs-bc-blockchain', name: 'Blockchain' },
            { id: 'cs-bc-block', name: 'Block' },
            { id: 'cs-bc-chain', name: 'Chain' },
            { id: 'cs-bc-hash', name: 'Hash' },
            { id: 'cs-bc-ledger', name: 'Distributed Ledger' },
            { id: 'cs-bc-decentralization', name: 'Decentralization' },
            { id: 'cs-bc-transactions', name: 'Transactions' },
            { id: 'cs-bc-nodes', name: 'Nodes' },
            { id: 'cs-bc-consensus', name: 'Consensus Mechanism' },
            { id: 'cs-bc-bitcoin', name: 'Bitcoin' },
            { id: 'cs-bc-apps', name: 'Blockchain Applications' },
            { id: 'cs-bc-security', name: 'Blockchain Security' },
            { id: 'cs-bc-smart-contract', name: 'Smart Contract' }
          ]
        },
        {
          id: 'cs-dark-web',
          name: 'Dark Web',
          importance: 1,
          topics: [
            { id: 'cs-dw-surface', name: 'Surface Web' },
            { id: 'cs-dw-deep', name: 'Deep Web' },
            { id: 'cs-dw-dark', name: 'Dark Web' },
            { id: 'cs-dw-darknet', name: 'Darknet' },
            { id: 'cs-dw-tor', name: 'Tor Browser' },
            { id: 'cs-dw-anonymity', name: 'Anonymity' },
            { id: 'cs-dw-legit', name: 'Legitimate Use' },
            { id: 'cs-dw-criminal', name: 'Criminal Misuse' },
            { id: 'cs-dw-cybercrime', name: 'Cybercrime' },
            { id: 'cs-dw-risks', name: 'Risks' },
            { id: 'cs-dw-privacy', name: 'Privacy & Security' }
          ]
        },
        {
          id: 'cs-banking-ecommerce',
          name: 'Banking + E-commerce Applications',
          importance: 1,
          topics: [
            { id: 'cs-bank-core', name: 'Core Banking' },
            { id: 'cs-bank-atm', name: 'ATM' },
            { id: 'cs-bank-internet', name: 'Internet Banking' },
            { id: 'cs-bank-digital', name: 'Digital Transactions' },
            { id: 'cs-bank-security', name: 'Banking Security' },
            { id: 'cs-bank-shopping', name: 'Online Shopping' },
            { id: 'cs-bank-gateway', name: 'Payment Gateway' },
            { id: 'cs-bank-models', name: 'E-commerce Models' },
            { id: 'cs-bank-txn-sec', name: 'Transaction Security' }
          ]
        },
        {
          id: 'cs-edi-gui',
          name: 'EDI + Computer Controlled Devices + GUI/Graphics',
          importance: 0.5,
          topics: [
            { id: 'cs-edi-edi', name: 'EDI (Electronic Data Interchange)' },
            { id: 'cs-edi-office', name: 'Electronic Office' },
            { id: 'cs-edi-cc-devices', name: 'Computer-Controlled Devices' },
            { id: 'cs-edi-sensors', name: 'Sensors' },
            { id: 'cs-edi-gui', name: 'GUI' },
            { id: 'cs-edi-graphics', name: 'Graphics' },
            { id: 'cs-edi-digital-sys', name: 'Digital Office Systems' }
          ]
        },
        {
          id: 'cs-foxpro-oracle',
          name: 'FoxPro + Oracle',
          importance: 0.5,
          topics: [
            { id: 'cs-fox-basics', name: 'FoxPro Basics' },
            { id: 'cs-fox-commands', name: 'FoxPro Commands' },
            { id: 'cs-fox-records', name: 'Records in FoxPro' },
            { id: 'cs-fox-fields', name: 'Fields in FoxPro' },
            { id: 'cs-ora-basics', name: 'Oracle Basics' },
            { id: 'cs-ora-database', name: 'Oracle Database' },
            { id: 'cs-ora-sql', name: 'Oracle SQL' }
          ]
        }
      ]
    },
    {
      id: 'reasoning',
      name: 'Mental Aptitude + Reasoning',
      shortName: 'Reasoning',
      weight: 25,
      icon: '🧠',
      color: '#8b5cf6',
      chapters: [
        {
          id: 're-analogy',
          name: 'Analogy',
          importance: 10,
          topics: [
            { id: 're-an-word', name: 'Word Analogy' },
            { id: 're-an-number', name: 'Number Analogy' },
            { id: 're-an-letter', name: 'Letter Analogy' },
            { id: 're-an-figure', name: 'Figure / Diagram Analogy' },
            { id: 're-an-semantic', name: 'Semantic Analogy' },
            { id: 're-an-mixed', name: 'Mixed Analogy' }
          ]
        },
        {
          id: 're-series',
          name: 'Series - Number / Alphabet / Mixed',
          importance: 10,
          topics: [
            { id: 're-ser-number', name: 'Number Series' },
            { id: 're-ser-alphabet', name: 'Alphabet Series' },
            { id: 're-ser-mixed', name: 'Mixed Series' },
            { id: 're-ser-missing', name: 'Missing Term in Series' },
            { id: 're-ser-wrong', name: 'Wrong Term in Series' },
            { id: 're-ser-pattern', name: 'Pattern Recognition in Series' }
          ]
        },
        {
          id: 're-classification',
          name: 'Classification',
          importance: 8,
          topics: [
            { id: 're-cl-word', name: 'Word Classification (Odd One Out)' },
            { id: 're-cl-number', name: 'Number Classification' },
            { id: 're-cl-letter', name: 'Letter Classification' },
            { id: 're-cl-figure', name: 'Figure Classification' },
            { id: 're-cl-general', name: 'General Knowledge Classification' }
          ]
        },
        {
          id: 're-blood-relation',
          name: 'Relationship / Blood Relation',
          importance: 8,
          topics: [
            { id: 're-br-family', name: 'Family Tree Problems' },
            { id: 're-br-coded', name: 'Coded Blood Relations' },
            { id: 're-br-puzzle', name: 'Blood Relation Puzzles' },
            { id: 're-br-pointing', name: 'Pointing/Introducing Based Problems' }
          ]
        },
        {
          id: 're-direction-sense',
          name: 'Direction Sense',
          importance: 7,
          topics: [
            { id: 're-ds-basic', name: 'Basic Directions (N, S, E, W)' },
            { id: 're-ds-turns', name: 'Left / Right Turns' },
            { id: 're-ds-distance', name: 'Distance Calculation' },
            { id: 're-ds-shadow', name: 'Shadow-Based Direction' },
            { id: 're-ds-compass', name: 'Compass Directions' }
          ]
        },
        {
          id: 're-logical-diagrams',
          name: 'Logical Diagrams (Venn Diagrams)',
          importance: 8,
          topics: [
            { id: 're-ld-venn', name: 'Venn Diagram Basics' },
            { id: 're-ld-two-set', name: 'Two-Set Venn Diagrams' },
            { id: 're-ld-three-set', name: 'Three-Set Venn Diagrams' },
            { id: 're-ld-figure', name: 'Figure-Based Venn Diagrams' },
            { id: 're-ld-statement', name: 'Statement-Based Venn Diagrams' }
          ]
        },
        {
          id: 're-coding-decoding',
          name: 'Symbol Relationship / Coding-Decoding',
          importance: 7,
          topics: [
            { id: 're-cd-letter', name: 'Letter Coding' },
            { id: 're-cd-number', name: 'Number Coding' },
            { id: 're-cd-symbol', name: 'Symbol Coding' },
            { id: 're-cd-substitution', name: 'Substitution Coding' },
            { id: 're-cd-matrix', name: 'Matrix Coding' },
            { id: 're-cd-mixed', name: 'Mixed Coding-Decoding' }
          ]
        },
        {
          id: 're-problem-solving',
          name: 'Problem Solving',
          importance: 7,
          topics: [
            { id: 're-ps-logical', name: 'Logical Problem Solving' },
            { id: 're-ps-analytical', name: 'Analytical Reasoning' },
            { id: 're-ps-puzzles', name: 'Puzzles' },
            { id: 're-ps-seating', name: 'Seating Arrangement' },
            { id: 're-ps-ranking', name: 'Ranking & Order' }
          ]
        },
        {
          id: 're-observation',
          name: 'Observation',
          importance: 6,
          topics: [
            { id: 're-ob-figure', name: 'Figure Observation' },
            { id: 're-ob-counting', name: 'Counting Figures' },
            { id: 're-ob-mirror', name: 'Mirror Image' },
            { id: 're-ob-water', name: 'Water Image' },
            { id: 're-ob-embedded', name: 'Embedded Figures' }
          ]
        },
        {
          id: 're-space-visualization',
          name: 'Space Visualization',
          importance: 5,
          topics: [
            { id: 're-sv-cube', name: 'Cube & Dice Problems' },
            { id: 're-sv-paper', name: 'Paper Folding' },
            { id: 're-sv-cutting', name: 'Paper Cutting' },
            { id: 're-sv-rotation', name: 'Mental Rotation' },
            { id: 're-sv-3d', name: '3D Figure Visualization' }
          ]
        },
        {
          id: 're-arithmetic-reasoning',
          name: 'Arithmetic Reasoning',
          importance: 6,
          topics: [
            { id: 're-ar-age', name: 'Age Problems' },
            { id: 're-ar-work', name: 'Work & Time' },
            { id: 're-ar-ratio', name: 'Ratio & Proportion' },
            { id: 're-ar-percent', name: 'Percentage' },
            { id: 're-ar-number', name: 'Number-Based Reasoning' }
          ]
        },
        {
          id: 're-decision-making',
          name: 'Decision Making',
          importance: 5,
          topics: [
            { id: 're-dm-assertion', name: 'Assertion & Reason' },
            { id: 're-dm-course', name: 'Course of Action' },
            { id: 're-dm-statements', name: 'Statement & Conclusion' },
            { id: 're-dm-assumption', name: 'Assumption' }
          ]
        },
        {
          id: 're-data-interpretation',
          name: 'Data Interpretation / Logical Data',
          importance: 4,
          topics: [
            { id: 're-di-table', name: 'Table Interpretation' },
            { id: 're-di-bar', name: 'Bar Chart' },
            { id: 're-di-pie', name: 'Pie Chart' },
            { id: 're-di-line', name: 'Line Graph' },
            { id: 're-di-logical', name: 'Logical Data Analysis' }
          ]
        },
        {
          id: 're-similarities',
          name: 'Similarities & Differences',
          importance: 4,
          topics: [
            { id: 're-sim-objects', name: 'Object Similarities' },
            { id: 're-sim-patterns', name: 'Pattern Similarities' },
            { id: 're-sim-logical', name: 'Logical Similarities' },
            { id: 're-sim-figure', name: 'Figure Similarities & Differences' }
          ]
        },
        {
          id: 're-visual-memory',
          name: 'Visual Memory',
          importance: 3,
          topics: [
            { id: 're-vm-figure', name: 'Figure Memory Test' },
            { id: 're-vm-sequence', name: 'Sequence Memory' },
            { id: 're-vm-pattern', name: 'Pattern Memory' }
          ]
        },
        {
          id: 're-perception',
          name: 'Perception Test',
          importance: 2,
          topics: [
            { id: 're-per-visual', name: 'Visual Perception' },
            { id: 're-per-spatial', name: 'Spatial Perception' },
            { id: 're-per-depth', name: 'Depth Perception' }
          ]
        },
        {
          id: 're-argument',
          name: 'Forcefulness of Argument',
          importance: 2,
          topics: [
            { id: 're-arg-strong', name: 'Strong Arguments' },
            { id: 're-arg-weak', name: 'Weak Arguments' },
            { id: 're-arg-evaluate', name: 'Evaluating Arguments' }
          ]
        },
        {
          id: 're-inference',
          name: 'Implied Meaning / Inference',
          importance: 2,
          topics: [
            { id: 're-inf-direct', name: 'Direct Inference' },
            { id: 're-inf-implied', name: 'Implied Meaning' },
            { id: 're-inf-conclusion', name: 'Inference-Based Conclusion' }
          ]
        },
        {
          id: 're-common-sense',
          name: 'Common Sense Test',
          importance: 2,
          topics: [
            { id: 're-cs-everyday', name: 'Everyday Reasoning' },
            { id: 're-cs-practical', name: 'Practical Situations' },
            { id: 're-cs-logic', name: 'Common Logic Application' }
          ]
        },
        {
          id: 're-discrimination',
          name: 'Discrimination',
          importance: 2,
          topics: [
            { id: 're-disc-figure', name: 'Figure Discrimination' },
            { id: 're-disc-word', name: 'Word Discrimination' },
            { id: 're-disc-letter', name: 'Letter Discrimination' }
          ]
        },
        {
          id: 're-abstract-concepts',
          name: 'Concepts / Abstract Ideas & Symbols',
          importance: 2,
          topics: [
            { id: 're-abs-abstract', name: 'Abstract Reasoning' },
            { id: 're-abs-symbols', name: 'Symbol-Based Reasoning' },
            { id: 're-abs-concepts', name: 'Conceptual Reasoning' }
          ]
        }
      ]
    },
    {
      id: 'general-knowledge',
      name: 'General Knowledge',
      shortName: 'GK',
      weight: 25,
      icon: '🌐',
      color: '#10b981',
      chapters: [
        {
          id: 'gk-current-affairs',
          name: 'Current Affairs',
          importance: 18,
          topics: [
            { id: 'gk-ca-national', name: 'National Current Affairs' },
            { id: 'gk-ca-international', name: 'International Current Affairs' },
            { id: 'gk-ca-up', name: 'UP Current Affairs' },
            { id: 'gk-ca-schemes', name: 'Government Schemes' },
            { id: 'gk-ca-appointments', name: 'Appointments & Resignations' },
            { id: 'gk-ca-awards', name: 'Awards & Honours' },
            { id: 'gk-ca-sports', name: 'Sports News' },
            { id: 'gk-ca-defence', name: 'Defence & Security' },
            { id: 'gk-ca-science', name: 'Science & Technology News' },
            { id: 'gk-ca-space', name: 'Space Missions' },
            { id: 'gk-ca-economy', name: 'Economic News' },
            { id: 'gk-ca-reports', name: 'Reports & Indices' },
            { id: 'gk-ca-indexes', name: 'Global Indexes' },
            { id: 'gk-ca-summits', name: 'Summits & Meetings' },
            { id: 'gk-ca-agreements', name: 'Agreements & Treaties' },
            { id: 'gk-ca-decisions', name: 'Important Government Decisions' }
          ]
        },
        {
          id: 'gk-up',
          name: 'Uttar Pradesh GK',
          importance: 14,
          topics: [
            { id: 'gk-up-geography', name: 'UP Geography' },
            { id: 'gk-up-districts', name: 'Districts of UP' },
            { id: 'gk-up-rivers', name: 'Rivers of UP' },
            { id: 'gk-up-dams', name: 'Dams of UP' },
            { id: 'gk-up-agriculture', name: 'Agriculture in UP' },
            { id: 'gk-up-industries', name: 'Industries in UP' },
            { id: 'gk-up-minerals', name: 'Minerals of UP' },
            { id: 'gk-up-education', name: 'Education in UP' },
            { id: 'gk-up-universities', name: 'Universities of UP' },
            { id: 'gk-up-culture', name: 'Culture of UP' },
            { id: 'gk-up-folk-dance', name: 'Folk Dances of UP' },
            { id: 'gk-up-folk-music', name: 'Folk Music of UP' },
            { id: 'gk-up-festivals', name: 'Festivals of UP' },
            { id: 'gk-up-languages', name: 'Languages & Dialects of UP' },
            { id: 'gk-up-historical', name: 'Historical Places of UP' },
            { id: 'gk-up-religious', name: 'Religious Places of UP' },
            { id: 'gk-up-tourism', name: 'Tourism in UP' },
            { id: 'gk-up-personalities', name: 'Personalities from UP' },
            { id: 'gk-up-schemes', name: 'UP Government Schemes' },
            { id: 'gk-up-admin', name: 'UP Administration' },
            { id: 'gk-up-police', name: 'UP Police Structure' },
            { id: 'gk-up-revenue', name: 'Revenue Administration' }
          ]
        },
        {
          id: 'gk-polity',
          name: 'Indian Polity & Constitution',
          importance: 12,
          topics: [
            { id: 'gk-pol-making', name: 'Constitution Making' },
            { id: 'gk-pol-ca', name: 'Constituent Assembly' },
            { id: 'gk-pol-preamble', name: 'Preamble' },
            { id: 'gk-pol-fr', name: 'Fundamental Rights' },
            { id: 'gk-pol-dpsp', name: 'DPSP' },
            { id: 'gk-pol-fd', name: 'Fundamental Duties' },
            { id: 'gk-pol-citizenship', name: 'Citizenship' },
            { id: 'gk-pol-president', name: 'President' },
            { id: 'gk-pol-vp', name: 'Vice President' },
            { id: 'gk-pol-pm', name: 'Prime Minister' },
            { id: 'gk-pol-com', name: 'Council of Ministers' },
            { id: 'gk-pol-parliament', name: 'Parliament' },
            { id: 'gk-pol-loksabha', name: 'Lok Sabha' },
            { id: 'gk-pol-rajyasabha', name: 'Rajya Sabha' },
            { id: 'gk-pol-sc', name: 'Supreme Court' },
            { id: 'gk-pol-hc', name: 'High Courts' },
            { id: 'gk-pol-governor', name: 'Governor' },
            { id: 'gk-pol-cm', name: 'Chief Minister' },
            { id: 'gk-pol-state-leg', name: 'State Legislature' },
            { id: 'gk-pol-ec', name: 'Election Commission' },
            { id: 'gk-pol-cag', name: 'CAG' },
            { id: 'gk-pol-upsc', name: 'UPSC' },
            { id: 'gk-pol-fc', name: 'Finance Commission' },
            { id: 'gk-pol-amendments', name: 'Constitutional Amendments' },
            { id: 'gk-pol-emergency', name: 'Emergency Provisions' },
            { id: 'gk-pol-panchayat', name: 'Panchayati Raj' },
            { id: 'gk-pol-municipal', name: 'Municipal Bodies' },
            { id: 'gk-pol-centre-state', name: 'Centre-State Relations' },
            { id: 'gk-pol-const-bodies', name: 'Constitutional Bodies' },
            { id: 'gk-pol-articles', name: 'Important Articles' },
            { id: 'gk-pol-schedules', name: 'Schedules of Constitution' }
          ]
        },
        {
          id: 'gk-science',
          name: 'General Science',
          importance: 12,
          topics: [
            { id: 'gk-sci-physics', name: 'Physics' },
            { id: 'gk-sci-chemistry', name: 'Chemistry' },
            { id: 'gk-sci-biology', name: 'Biology' },
            { id: 'gk-sci-human-body', name: 'Human Body' },
            { id: 'gk-sci-diseases', name: 'Diseases' },
            { id: 'gk-sci-vitamins', name: 'Vitamins & Nutrition' },
            { id: 'gk-sci-nutrition', name: 'Nutrition' },
            { id: 'gk-sci-genetics', name: 'Genetics' },
            { id: 'gk-sci-plant', name: 'Plant Biology' },
            { id: 'gk-sci-ecology', name: 'Ecology' },
            { id: 'gk-sci-everyday', name: 'Everyday Science' }
          ]
        },
        {
          id: 'gk-history',
          name: 'Indian History',
          importance: 10,
          topics: [
            { id: 'gk-hist-ancient', name: 'Ancient India' },
            { id: 'gk-hist-indus', name: 'Indus Valley Civilization' },
            { id: 'gk-hist-vedic', name: 'Vedic Age' },
            { id: 'gk-hist-buddhism', name: 'Buddhism' },
            { id: 'gk-hist-jainism', name: 'Jainism' },
            { id: 'gk-hist-maurya', name: 'Maurya Empire' },
            { id: 'gk-hist-gupta', name: 'Gupta Empire' },
            { id: 'gk-hist-medieval', name: 'Medieval India' },
            { id: 'gk-hist-delhi', name: 'Delhi Sultanate' },
            { id: 'gk-hist-mughal', name: 'Mughal Empire' },
            { id: 'gk-hist-bhakti', name: 'Bhakti Movement' },
            { id: 'gk-hist-sufi', name: 'Sufi Movement' },
            { id: 'gk-hist-maratha', name: 'Marathas' },
            { id: 'gk-hist-british', name: 'British Rule' },
            { id: 'gk-hist-1857', name: 'Revolt of 1857' },
            { id: 'gk-hist-reform', name: 'Social Reform Movements' },
            { id: 'gk-hist-congress', name: 'Indian National Congress' },
            { id: 'gk-hist-swadeshi', name: 'Swadeshi Movement' },
            { id: 'gk-hist-nc', name: 'Non-Cooperation Movement' },
            { id: 'gk-hist-cd', name: 'Civil Disobedience Movement' },
            { id: 'gk-hist-qi', name: 'Quit India Movement' },
            { id: 'gk-hist-revolutionary', name: 'Revolutionary Movement' },
            { id: 'gk-hist-bose', name: 'Subhas Chandra Bose' },
            { id: 'gk-hist-independence', name: 'Independence' },
            { id: 'gk-hist-partition', name: 'Partition' }
          ]
        },
        {
          id: 'gk-geography',
          name: 'Geography',
          importance: 8,
          topics: [
            { id: 'gk-geo-earth', name: 'Earth' },
            { id: 'gk-geo-lat', name: 'Latitude & Longitude' },
            { id: 'gk-geo-mountains', name: 'Mountains' },
            { id: 'gk-geo-plateaus', name: 'Plateaus' },
            { id: 'gk-geo-plains', name: 'Plains' },
            { id: 'gk-geo-rivers', name: 'Rivers' },
            { id: 'gk-geo-lakes', name: 'Lakes' },
            { id: 'gk-geo-climate', name: 'Climate' },
            { id: 'gk-geo-monsoon', name: 'Monsoon' },
            { id: 'gk-geo-soil', name: 'Soil Types' },
            { id: 'gk-geo-resources', name: 'Natural Resources' },
            { id: 'gk-geo-minerals', name: 'Minerals' },
            { id: 'gk-geo-ag', name: 'Agriculture Geography' },
            { id: 'gk-geo-industries', name: 'Industries & Location' },
            { id: 'gk-geo-india', name: 'Indian Geography' },
            { id: 'gk-geo-world', name: 'World Geography' },
            { id: 'gk-geo-seas', name: 'Seas & Oceans' },
            { id: 'gk-geo-rivers-mts', name: 'Important Rivers & Mountains' }
          ]
        },
        {
          id: 'gk-economy',
          name: 'Indian Economy',
          importance: 7,
          topics: [
            { id: 'gk-eco-gdp', name: 'GDP / GNP / NNP' },
            { id: 'gk-eco-inflation', name: 'Inflation' },
            { id: 'gk-eco-unemployment', name: 'Unemployment' },
            { id: 'gk-eco-poverty', name: 'Poverty' },
            { id: 'gk-eco-fiscal', name: 'Fiscal Policy' },
            { id: 'gk-eco-monetary', name: 'Monetary Policy' },
            { id: 'gk-eco-rbi', name: 'RBI' },
            { id: 'gk-eco-banking', name: 'Banking System' },
            { id: 'gk-eco-budget', name: 'Union Budget' },
            { id: 'gk-eco-taxation', name: 'Taxation' },
            { id: 'gk-eco-gst', name: 'GST' },
            { id: 'gk-eco-public-finance', name: 'Public Finance' },
            { id: 'gk-eco-bop', name: 'Balance of Payments' },
            { id: 'gk-eco-trade', name: 'Foreign Trade' },
            { id: 'gk-eco-lpg', name: 'LPG Reforms' },
            { id: 'gk-eco-digital', name: 'Digital Economy' },
            { id: 'gk-eco-demo', name: 'Demonetization' }
          ]
        },
        {
          id: 'gk-environment',
          name: 'Environment',
          importance: 5,
          topics: [
            { id: 'gk-env-ecosystem', name: 'Ecosystem' },
            { id: 'gk-env-food-chain', name: 'Food Chain' },
            { id: 'gk-env-food-web', name: 'Food Web' },
            { id: 'gk-env-biodiversity', name: 'Biodiversity' },
            { id: 'gk-env-pollution', name: 'Pollution' },
            { id: 'gk-env-air', name: 'Air Pollution' },
            { id: 'gk-env-water', name: 'Water Pollution' },
            { id: 'gk-env-soil', name: 'Soil Pollution' },
            { id: 'gk-env-climate', name: 'Climate Change' },
            { id: 'gk-env-global-warming', name: 'Global Warming' },
            { id: 'gk-env-ozone', name: 'Ozone Layer' },
            { id: 'gk-env-renewable', name: 'Renewable Energy' },
            { id: 'gk-env-forest', name: 'Forest' },
            { id: 'gk-env-wildlife', name: 'Wildlife' },
            { id: 'gk-env-parks', name: 'National Parks' },
            { id: 'gk-env-conventions', name: 'Environmental Conventions' },
            { id: 'gk-env-sustainable', name: 'Sustainable Development' },
            { id: 'gk-env-urban', name: 'Urban Environmental Issues' }
          ]
        },
        {
          id: 'gk-security',
          name: 'Internal Security & Terrorism',
          importance: 4,
          topics: [
            { id: 'gk-sec-internal', name: 'Internal Security' },
            { id: 'gk-sec-terrorism', name: 'Terrorism' },
            { id: 'gk-sec-extremism', name: 'Extremism' },
            { id: 'gk-sec-cyber', name: 'Cyber Threats' },
            { id: 'gk-sec-border', name: 'Border Security' },
            { id: 'gk-sec-crime', name: 'Organized Crime' },
            { id: 'gk-sec-agencies', name: 'Intelligence & Security Agencies' }
          ]
        },
        {
          id: 'gk-human-rights',
          name: 'Human Rights',
          importance: 3,
          topics: [
            { id: 'gk-hr-rights', name: 'Human Rights' },
            { id: 'gk-hr-fundamental', name: 'Fundamental Rights' },
            { id: 'gk-hr-nhrc', name: 'NHRC' },
            { id: 'gk-hr-shrc', name: 'SHRC' },
            { id: 'gk-hr-women', name: "Women's Rights" },
            { id: 'gk-hr-child', name: "Children's Rights" },
            { id: 'gk-hr-custodial', name: 'Custodial Rights' }
          ]
        },
        {
          id: 'gk-agriculture',
          name: 'Agriculture',
          importance: 2,
          topics: [
            { id: 'gk-ag-crops', name: 'Crops of India' },
            { id: 'gk-ag-kharif', name: 'Kharif Crops' },
            { id: 'gk-ag-rabi', name: 'Rabi Crops' },
            { id: 'gk-ag-zaid', name: 'Zaid Crops' },
            { id: 'gk-ag-irrigation', name: 'Irrigation' },
            { id: 'gk-ag-green-rev', name: 'Green Revolution' },
            { id: 'gk-ag-soil', name: 'Soil Types' },
            { id: 'gk-ag-fertilizer', name: 'Fertilizer' },
            { id: 'gk-ag-schemes', name: 'Agricultural Schemes' },
            { id: 'gk-ag-msp', name: 'MSP (Minimum Support Price)' },
            { id: 'gk-ag-food-sec', name: 'Food Security' }
          ]
        },
        {
          id: 'gk-population',
          name: 'Population & Demography',
          importance: 1,
          topics: [
            { id: 'gk-pop-census', name: 'Census' },
            { id: 'gk-pop-growth', name: 'Population Growth' },
            { id: 'gk-pop-density', name: 'Population Density' },
            { id: 'gk-pop-sex-ratio', name: 'Sex Ratio' },
            { id: 'gk-pop-literacy', name: 'Literacy Rate' },
            { id: 'gk-pop-migration', name: 'Migration' },
            { id: 'gk-pop-urban', name: 'Urbanization' },
            { id: 'gk-pop-dividend', name: 'Demographic Dividend' }
          ]
        },
        {
          id: 'gk-commerce',
          name: 'Commerce & Trade',
          importance: 1,
          topics: [
            { id: 'gk-com-domestic', name: 'Domestic Trade' },
            { id: 'gk-com-international', name: 'International Trade' },
            { id: 'gk-com-imports', name: 'Imports' },
            { id: 'gk-com-exports', name: 'Exports' },
            { id: 'gk-com-bot', name: 'Balance of Trade' },
            { id: 'gk-com-wto', name: 'WTO' },
            { id: 'gk-com-imf', name: 'IMF' },
            { id: 'gk-com-wb', name: 'World Bank' },
            { id: 'gk-com-agreements', name: 'Trade Agreements' },
            { id: 'gk-com-ecommerce', name: 'E-commerce' }
          ]
        },
        {
          id: 'gk-organisations',
          name: 'International / National Organisations',
          importance: 1,
          topics: [
            { id: 'gk-org-un', name: 'United Nations (UN)' },
            { id: 'gk-org-un-agencies', name: 'UN Agencies (WHO, UNESCO)' },
            { id: 'gk-org-saarc', name: 'SAARC' },
            { id: 'gk-org-g20', name: 'G-20' },
            { id: 'gk-org-brics', name: 'BRICS' },
            { id: 'gk-org-national', name: 'National Organisations of India' }
          ]
        },
        {
          id: 'gk-static',
          name: 'Static GK',
          importance: 2,
          topics: [
            { id: 'gk-st-countries', name: 'Countries & Capitals' },
            { id: 'gk-st-currencies', name: 'Currencies' },
            { id: 'gk-st-days', name: 'Important Days' },
            { id: 'gk-st-awards', name: 'Awards (Nobel, Bharat Ratna)' },
            { id: 'gk-st-books', name: 'Books & Authors' },
            { id: 'gk-st-discoveries', name: 'Discoveries & Inventions' },
            { id: 'gk-st-scientists', name: 'Famous Scientists' },
            { id: 'gk-st-personalities', name: 'Notable Personalities' },
            { id: 'gk-st-symbols', name: 'National Symbols of India' }
          ]
        },
        {
          id: 'gk-social-media',
          name: 'Social Media / Digital Communication',
          importance: 0.5,
          topics: [
            { id: 'gk-sm-platforms', name: 'Social Media Platforms' },
            { id: 'gk-sm-digital-comm', name: 'Digital Communication' },
            { id: 'gk-sm-fake-news', name: 'Fake News & Misinformation' },
            { id: 'gk-sm-policy', name: 'Social Media Policy' }
          ]
        },
        {
          id: 'gk-demonetization',
          name: 'Demonetization / GST / Digital Economy',
          importance: 0.5,
          topics: [
            { id: 'gk-dem-demonetization', name: 'Demonetization' },
            { id: 'gk-dem-gst', name: 'GST (Goods & Services Tax)' },
            { id: 'gk-dem-digital-payments', name: 'Digital Payments (UPI, BHIM)' },
            { id: 'gk-dem-digital-economy', name: 'Digital Economy Overview' }
          ]
        }
      ]
    }
  ]
};

// ============================================================
// CONSTANTS & HELPERS
// ============================================================
const STORAGE_KEY = 'upPoliceGradeAStudyTracker';
const STORAGE_VERSION = 1;
const DEBOUNCE_MS = 180;

const PRIO = {
  VH: { label: 'Very High', cls: 'prio-vh', min: 10 },
  H:  { label: 'High',      cls: 'prio-h',  min: 5  },
  M:  { label: 'Medium',    cls: 'prio-m',  min: 2  },
  L:  { label: 'Low',       cls: 'prio-l',  min: 0  }
};

function getPrio(imp) {
  if (imp >= 10) return PRIO.VH;
  if (imp >= 5)  return PRIO.H;
  if (imp >= 2)  return PRIO.M;
  return PRIO.L;
}

// ============================================================
// STATE
// ============================================================
const S = {
  done: {},
  expSubj: {},
  expChap: {},
  filters: { subj: 'all', status: 'all', prio: 'all', q: '', sort: 'imp-desc', quick: 'all' },
  theme: 'dark',
  view: 'dashboard',
  subjId: null,
  sidebarOpen: false,
  filtersOpen: false
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (!d || d.version !== STORAGE_VERSION) return;
    if (d.done && typeof d.done === 'object') S.done = d.done;
    if (d.expSubj && typeof d.expSubj === 'object') S.expSubj = d.expSubj;
    if (d.expChap && typeof d.expChap === 'object') S.expChap = d.expChap;
    if (d.theme === 'light' || d.theme === 'dark') S.theme = d.theme;
    if (d.filters && typeof d.filters === 'object') {
      Object.assign(S.filters, d.filters);
      S.filters.q = '';
    }
  } catch (e) {
    console.warn('LS read error', e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      version: STORAGE_VERSION,
      done: S.done,
      expSubj: S.expSubj,
      expChap: S.expChap,
      theme: S.theme,
      filters: {
        subj: S.filters.subj,
        status: S.filters.status,
        prio: S.filters.prio,
        sort: S.filters.sort,
        quick: S.filters.quick
      },
      ts: new Date().toISOString()
    }));
  } catch (e) {
    console.warn('LS write error', e);
  }
}

// ============================================================
// CALCULATIONS
// ============================================================
function chapterProg(ch) {
  const t = ch.topics.length;
  const c = ch.topics.filter(x => S.done[x.id]).length;
  return { c, t, pct: t ? Math.round((c / t) * 100) : 0 };
}

function subjectProg(subj) {
  let c = 0, t = 0;
  for (const ch of subj.chapters) {
    const p = chapterProg(ch);
    c += p.c;
    t += p.t;
  }
  return { c, t, pct: t ? Math.round((c / t) * 100) : 0 };
}

function overallProg() {
  let c = 0, t = 0;
  for (const s of STUDY_DATA.subjects) {
    const p = subjectProg(s);
    c += p.c;
    t += p.t;
  }
  return { c, t, pct: t ? Math.round((c / t) * 100) : 0 };
}

function hpRemaining() {
  let n = 0;
  for (const s of STUDY_DATA.subjects) {
    for (const ch of s.chapters) {
      if (ch.importance >= 5) {
        for (const t of ch.topics) {
          if (!S.done[t.id]) n++;
        }
      }
    }
  }
  return n;
}

function currentFocus() {
  let best = null, bi = -1;
  for (const s of STUDY_DATA.subjects) {
    for (const ch of s.chapters) {
      if (ch.importance > bi) {
        for (const t of ch.topics) {
          if (!S.done[t.id]) {
            best = { t, ch, s };
            bi = ch.importance;
            break;
          }
        }
      }
    }
  }
  return best;
}

function focusTopics(n = 10) {
  const all = [];
  for (const s of STUDY_DATA.subjects) {
    for (const ch of s.chapters) {
      for (const t of ch.topics) {
        if (!S.done[t.id]) all.push({ t, ch, s });
      }
    }
  }
  all.sort((a, b) => b.ch.importance - a.ch.importance);
  return all.slice(0, n);
}

function prioBD() {
  const bd = { vh: { c: 0, t: 0 }, h: { c: 0, t: 0 }, m: { c: 0, t: 0 }, l: { c: 0, t: 0 } };
  for (const s of STUDY_DATA.subjects) {
    for (const ch of s.chapters) {
      const p = getPrio(ch.importance);
      const k = p === PRIO.VH ? 'vh' : p === PRIO.H ? 'h' : p === PRIO.M ? 'm' : 'l';
      for (const t of ch.topics) {
        bd[k].t++;
        if (S.done[t.id]) bd[k].c++;
      }
    }
  }
  return bd;
}

function chapStatus(ch) {
  const p = chapterProg(ch);
  return p.pct === 0 ? 'ns' : p.pct === 100 ? 'done' : 'ip';
}

// ============================================================
// ACTIONS
// ============================================================
function toggleTopic(id) {
  if (S.done[id]) {
    delete S.done[id];
  } else {
    S.done[id] = true;
  }
  saveState();
  updateProgress();
}

function resetProgress() {
  S.done = {};
  saveState();
  updateProgress();
  toast('Progress reset successfully', 'info');
}

function exportProg() {
  const data = {
    app: 'UP Police Grade A Study Tracker',
    version: STORAGE_VERSION,
    at: new Date().toISOString(),
    done: S.done,
    theme: S.theme
  };
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })),
    download: 'up-police-progress.json'
  });
  a.click();
  toast('Progress exported!', 'success');
}

function importProg(json) {
  try {
    const d = JSON.parse(json);
    if (!d || typeof d.done !== 'object') throw new Error('Invalid format');
    const ids = new Set(STUDY_DATA.subjects.flatMap(s => s.chapters.flatMap(ch => ch.topics.map(t => t.id))));
    const v = {};
    for (const [k, val] of Object.entries(d.done)) {
      if (ids.has(k) && val === true) v[k] = true;
    }
    S.done = v;
    saveState();
    updateProgress();
    toast('Progress imported successfully!', 'success');
  } catch (err) {
    toast('Invalid JSON backup file', 'error');
  }
}

// ============================================================
// FILTERING
// ============================================================
function filteredData() {
  const { subj, status, prio, q, sort, quick } = S.filters;
  const lq = q.toLowerCase().trim();
  const results = [];

  for (const s of STUDY_DATA.subjects) {
    if (subj !== 'all' && s.id !== subj) continue;
    for (const ch of s.chapters) {
      const ts = ch.topics.filter(t => {
        const done = !!S.done[t.id];
        const p = getPrio(ch.importance);
        if (status === 'completed' && !done) return false;
        if (status === 'incomplete' && done) return false;
        if (prio === 'very-high' && p !== PRIO.VH) return false;
        if (prio === 'high' && p !== PRIO.H) return false;
        if (prio === 'medium' && p !== PRIO.M) return false;
        if (prio === 'low' && p !== PRIO.L) return false;
        if (quick === 'incomplete' && done) return false;
        if (quick === 'completed' && !done) return false;
        if (quick === 'high-priority' && ch.importance < 5) return false;
        if (quick === 'focus' && done) return false;
        if (lq) {
          const m = t.name.toLowerCase().includes(lq) ||
                    ch.name.toLowerCase().includes(lq) ||
                    s.name.toLowerCase().includes(lq);
          if (!m) return false;
        }
        return true;
      });
      if (ts.length) results.push({ s, ch, ts });
    }
  }

  if (sort === 'imp-desc') results.sort((a, b) => b.ch.importance - a.ch.importance);
  else if (sort === 'imp-asc') results.sort((a, b) => a.ch.importance - b.ch.importance);
  else if (sort === 'alpha') results.sort((a, b) => a.ch.name.localeCompare(b.ch.name));
  else if (sort === 'inc-first') results.sort((a, b) => chapterProg(a.ch).pct - chapterProg(b.ch).pct);
  else if (sort === 'done-first') results.sort((a, b) => chapterProg(b.ch).pct - chapterProg(a.ch).pct);

  return quick === 'focus' ? results.slice(0, 10) : results;
}

// ============================================================
// ESCAPE & HIGHLIGHT
// ============================================================
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function hi(text, q) {
  if (!q) return esc(text);
  const eq = esc(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return esc(text).replace(new RegExp(`(${eq})`, 'gi'), '<mark>$1</mark>');
}

function toast(msg, type = 'info') {
  const ct = document.getElementById('toasts');
  if (!ct) return;
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span><span>${esc(msg)}</span>`;
  ct.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 280);
  }, 2800);
}

// ============================================================
// UI COMPONENTS
// ============================================================
function ring(pct, sz = 88, sw = 8, col = 'var(--primary)') {
  const r = (sz - sw) / 2;
  const circ = 2 * Math.PI * r;
  const off = circ - (pct / 100) * circ;
  return `<svg class="ring" width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}" aria-label="${pct}% complete">
    <circle class="ring-bg" cx="${sz/2}" cy="${sz/2}" r="${r}" stroke-width="${sw}" fill="none"/>
    <circle class="ring-fg" cx="${sz/2}" cy="${sz/2}" r="${r}" stroke-width="${sw}" fill="none"
      stroke="${col}" stroke-dasharray="${circ}" stroke-dashoffset="${off}"
      stroke-linecap="round" transform="rotate(-90 ${sz/2} ${sz/2})"/>
    <text class="ring-txt" x="${sz/2}" y="${sz/2}" dominant-baseline="middle" text-anchor="middle">${pct}%</text>
  </svg>`;
}

function bar(pct, col = 'var(--primary)', h = '6px') {
  return `<div class="bar-track" style="height:${h}" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
    <div class="bar-fill" style="width:${pct}%;background:${col};height:${h}"></div>
  </div>`;
}

function badge(imp) {
  const p = getPrio(imp);
  return `<span class="badge ${p.cls}">${p.label}</span>`;
}

function statusBadge(st) {
  return st === 'done' ? '<span class="status-badge s-done">Completed</span>' :
         st === 'ip' ? '<span class="status-badge s-ip">In Progress</span>' :
         '<span class="status-badge s-ns">Not Started</span>';
}

function getChatGptUrl(topicName, chapterName = '', subjectName = '') {
  const prompt = `You are an expert exam preparation tutor for the "UP Police Computer Operator Grade-A" examination conducted by UPPRPB.

Explain the following syllabus topic in the best and most effective study format:

🎯 Topic: ${topicName}
📚 Chapter: ${chapterName}
🏛️ Subject: ${subjectName}
🎯 Target Exam: UP Police Computer Operator Grade-A (UPPRPB)

Please provide a comprehensive, exam-oriented guide in easy-to-understand Hinglish (clear mix of Hindi & English) structured as follows:

1. 📌 Core Concept & Fundamentals (Saral bhasha me concept aur practical utility)
2. 🔑 Key Technical Details & Definitions (Formulas, diagrams, architecture, or key terms)
3. 🎯 Previous Year Exam Focus & Key Facts (UPPRPB / Police exam pattern ke according kya poocha jata hai)
4. 📝 5 High-Yield Practice MCQs with Answers & Detailed Explanations
5. 💡 2-Minute Quick Revision Summary & Pro-Tips`;

  return `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
}

function topicRow(t, imp, q, chName = '', subjName = '') {
  const done = !!S.done[t.id];
  const gptUrl = getChatGptUrl(t.name, chName, subjName);
  return `<div class="t-row ${done ? 't-done' : ''}" role="listitem">
    <label class="t-label" for="t-${t.id}">
      <input type="checkbox" id="t-${t.id}" class="t-cb" data-tid="${t.id}" ${done ? 'checked' : ''} aria-label="${esc(t.name)}">
      <span class="t-custom-cb" aria-hidden="true"></span>
      <span class="t-name">${hi(t.name, q)}</span>
    </label>
    <div class="t-actions">
      <a href="${gptUrl}" target="_blank" rel="noopener noreferrer" class="ai-btn" title="Explain '${esc(t.name)}' with ChatGPT (Notes, Key Points & MCQs)">
        <span class="ai-btn-icon">🤖</span>
        <span class="ai-btn-text">ChatGPT</span>
      </a>
      ${done ? '<span class="t-done-badge">Done</span>' : ''}
    </div>
  </div>`;
}

function chapterBlock(ch, ts, q, subj) {
  const exp = S.expChap[ch.id] !== false;
  const cp = chapterProg(ch);
  const st = chapStatus(ch);
  const rem = ts.filter(t => !S.done[t.id]).length;
  const tip = rem > 0 && cp.pct > 0 ? `<div class="ch-tip">${rem} topic${rem > 1 ? 's' : ''} remaining</div>` : '';
  return `<div class="ch-block" id="cb-${ch.id}">
    <div class="ch-hdr" data-tc="${ch.id}" role="button" tabindex="0" aria-expanded="${exp}">
      <div class="ch-info">
        <span class="ch-name">${hi(ch.name, q)}</span>
        <div class="ch-badges">${statusBadge(st)}${badge(ch.importance)}<span class="ch-imp">Imp: ${ch.importance}%</span></div>
      </div>
      <div class="ch-stats">
        <span class="ch-pct">${cp.pct}%</span>
        <span class="ch-cnt">${cp.c}/${cp.t}</span>
        ${bar(cp.pct, subj.color, '4px')}
      </div>
      <span class="chev ${exp ? 'exp' : ''}">›</span>
    </div>
    <div class="ch-body ${exp ? '' : 'coll'}">
      ${tip}
      <div class="t-list" role="list">${ts.map(t => topicRow(t, ch.importance, q, ch.name, subj.name)).join('')}</div>
    </div>
  </div>`;
}

// ============================================================
// RENDER VIEWS
// ============================================================
function renderTracker() {
  const data = filteredData();
  const q = S.filters.q.trim();
  const total = data.reduce((s, d) => s + d.ts.length, 0);
  if (!data.length) {
    return `<div class="empty">
      <div class="e-icon">🔍</div>
      <div class="e-title">No topics match your filters</div>
      <div class="e-sub">Try another search keyword or clear filters.</div>
    </div>`;
  }
  const bySub = {};
  for (const d of data) {
    if (!bySub[d.s.id]) bySub[d.s.id] = { s: d.s, chs: [] };
    bySub[d.s.id].chs.push({ ch: d.ch, ts: d.ts });
  }
  let html = q ? `<div class="sr-count">${total} result${total !== 1 ? 's' : ''} found</div>` : '';
  for (const sid of Object.keys(bySub)) {
    const { s, chs } = bySub[sid];
    const exp = S.expSubj[sid] !== false;
    const sp = subjectProg(s);
    html += `<div class="s-block" id="sb-${sid}">
      <div class="s-hdr" data-ts="${sid}" role="button" tabindex="0" aria-expanded="${exp}">
        <span class="s-icon">${s.icon}</span>
        <div class="s-info">
          <span class="s-name">${hi(s.name, q)}</span>
          <span class="s-meta">Weight: ${s.weight}% · ${sp.c}/${sp.t} topics</span>
        </div>
        <div class="s-right">
          ${bar(sp.pct, s.color, '4px')}
          <span class="s-pct">${sp.pct}%</span>
        </div>
        <span class="chev ${exp ? 'exp' : ''}">›</span>
      </div>
      <div class="s-body ${exp ? '' : 'coll'}">
        ${chs.map(({ ch, ts }) => chapterBlock(ch, ts, q, s)).join('')}
      </div>
    </div>`;
  }
  return html;
}

function renderDashboard() {
  const ov = overallProg(), hp = hpRemaining(), cf = currentFocus(), bd = prioBD();
  const sRows = STUDY_DATA.subjects.map(s => {
    const sp = subjectProg(s);
    return `<div class="spr" data-sid="${s.id}" role="button" tabindex="0">
      <div class="spr-l">
        <span class="spr-icon">${s.icon}</span>
        <div>
          <div class="spr-name">${esc(s.name)}</div>
          <div class="spr-wt">Weightage: ${s.weight}%</div>
        </div>
      </div>
      <div class="spr-r">
        <span>${sp.c}/${sp.t}</span>
        <span class="spr-pct">${sp.pct}%</span>
      </div>
      ${bar(sp.pct, s.color, '4px')}
    </div>`;
  }).join('');

  const bdRows = [
    ['vh', 'Very High (≥10%)', 'prio-vh'],
    ['h', 'High (5-9%)', 'prio-h'],
    ['m', 'Medium (2-4%)', 'prio-m'],
    ['l', 'Low (<2%)', 'prio-l']
  ].map(([k, lbl, cls]) => {
    const d = bd[k];
    const pct = d.t ? Math.round((d.c / d.t) * 100) : 0;
    return `<div class="bdr">
      <span class="bd-lbl"><span class="prio-dot ${cls}"></span>${lbl}</span>
      <div class="bd-bar">${bar(pct, '', '6px')}</div>
      <span class="bd-pct">${d.c}/${d.t} (${pct}%)</span>
    </div>`;
  }).join('');

  const fItems = focusTopics(5).map((f, i) => `
    <div class="fi">
      <span class="fi-n">${i + 1}</span>
      <div class="fi-info">
        <div class="fi-ch">${esc(f.ch.name)}</div>
        <div class="fi-s">${esc(f.s.name)} · <strong>${f.ch.importance}% weight</strong></div>
      </div>
      ${badge(f.ch.importance)}
    </div>`).join('');

  return `<div class="dashboard" id="dashboard">
    <div class="dash-hero">
      <div class="hero-text">
        <h1 class="hero-title">UP Police Computer Operator Grade-A</h1>
        <p class="hero-sub">Preparation Dashboard &amp; Systematic Topic Coverage Tracker</p>
      </div>
    </div>

    <div class="stat-cards">
      <div class="sc" id="sc-ring">
        <div class="ring-wrap" id="ring-wrap">${ring(ov.pct, 88, 8, '#6366f1')}</div>
        <div class="sc-lbl">Overall Syllabus Progress</div>
      </div>
      <div class="sc" id="sc-topics">
        <div class="sc-big" id="sc-topics-n">${ov.c}<span class="sc-den">/${ov.t}</span></div>
        <div class="sc-lbl">Topics Completed</div>
      </div>
      <div class="sc" id="sc-hp">
        <div class="sc-big hp" id="sc-hp-n">${hp}</div>
        <div class="sc-lbl">High-Priority Remaining</div>
      </div>
      <div class="sc" id="sc-focus">
        <div class="sc-focus-lbl">Highest Impact Target</div>
        ${cf ? `<div class="sc-focus-ch">${esc(cf.ch.name)}</div>
                <div class="sc-focus-s">${esc(cf.s.name)} &middot; ${cf.ch.importance}% priority</div>` :
               `<div class="sc-focus-ch">🎉 All Syllabus Completed!</div>`}
      </div>
    </div>

    <div class="dash-grid">
      <div class="ds">
        <div class="sec-title">Subject Breakdown</div>
        <div class="spr-list" id="spr-list">${sRows}</div>
      </div>
      <div class="ds">
        <div class="sec-title">Priority Breakdown</div>
        <div class="bdr-list" id="bdr-list">${bdRows}</div>
      </div>
    </div>

    <div class="ds">
      <div class="sec-title">Top High-Impact Focus Topics</div>
      <div class="f-list">${fItems || '<div class="e-msg">All topics completed! Amazing work!</div>'}</div>
    </div>

    <div class="disclaimer">
      ℹ️ Topic-level importance percentages are preparation-priority estimates based on syllabus coverage and previous-year question trends. UPPRPB does not publish official sub-topic weightage.
    </div>
  </div>`;
}

function renderFocus() {
  const ts = focusTopics(12);
  if (!ts.length) {
    return `<div class="empty">
      <div class="e-icon">🎉</div>
      <div class="e-title">All topics completed!</div>
      <div class="e-sub">You have covered every syllabus topic. Great job!</div>
    </div>`;
  }
  return `<div class="focus-view">
    <div class="fv-hdr">
      <div class="fv-title">🎯 High-Yield Study Mode</div>
      <div class="fv-sub">Top ${ts.length} high-priority topics waiting to be mastered</div>
    </div>
    <div class="fv-list">${ts.map((f, i) => `
      <div class="fv-item ${S.done[f.t.id] ? 't-done' : ''}">
        <span class="fv-n">${i + 1}</span>
        <label class="t-label" for="fv-${f.t.id}">
          <input type="checkbox" id="fv-${f.t.id}" class="t-cb" data-tid="${f.t.id}" ${S.done[f.t.id] ? 'checked' : ''}>
          <span class="t-custom-cb" aria-hidden="true"></span>
          <div class="fv-info">
            <div class="fv-tn">${esc(f.t.name)}</div>
            <div class="fv-tm">${esc(f.ch.name)} &middot; ${esc(f.s.name)}</div>
          </div>
        </label>
        <div class="fv-actions">
          <a href="${getChatGptUrl(f.t.name, f.ch.name, f.s.name)}" target="_blank" rel="noopener noreferrer" class="ai-btn" title="Explain '${esc(f.t.name)}' with ChatGPT">
            <span class="ai-btn-icon">🤖</span>
            <span class="ai-btn-text">ChatGPT</span>
          </a>
          ${badge(f.ch.importance)}
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

function renderSubjDetail(subjId) {
  const s = STUDY_DATA.subjects.find(x => x.id === subjId);
  if (!s) return `<div class="empty"><div class="e-title">Subject not found.</div></div>`;
  const sp = subjectProg(s);
  const chs = s.chapters.map(ch => {
    const exp = S.expChap[ch.id] !== false;
    const cp = chapterProg(ch);
    const st = chapStatus(ch);
    return `<div class="ch-block" id="cb-${ch.id}">
      <div class="ch-hdr" data-tc="${ch.id}" role="button" tabindex="0" aria-expanded="${exp}">
        <div class="ch-info">
          <span class="ch-name">${esc(ch.name)}</span>
          <div class="ch-badges">${statusBadge(st)}${badge(ch.importance)}<span class="ch-imp">Imp: ${ch.importance}%</span></div>
        </div>
        <div class="ch-stats">
          <span class="ch-pct">${cp.pct}%</span>
          <span class="ch-cnt">${cp.c}/${cp.t}</span>
          ${bar(cp.pct, s.color, '4px')}
        </div>
        <span class="chev ${exp ? 'exp' : ''}">›</span>
      </div>
      <div class="ch-body ${exp ? '' : 'coll'}">
        <div class="t-list" role="list">${ch.topics.map(t => topicRow(t, ch.importance, '', ch.name, s.name)).join('')}</div>
      </div>
    </div>`;
  }).join('');

  return `<div class="subj-detail">
    <button class="back-btn" id="back-btn">← Back to Dashboard</button>
    <div class="sd-hdr">
      <span class="sd-icon">${s.icon}</span>
      <div class="sd-info">
        <h2 class="sd-name">${esc(s.name)}</h2>
        <div class="sd-meta" id="sd-meta">Exam Weightage: ${s.weight}% &middot; ${sp.c}/${sp.t} completed &middot; ${sp.pct}%</div>
      </div>
      <div class="sd-ring" id="sd-ring">${ring(sp.pct, 76, 7, s.color)}</div>
    </div>
    ${bar(sp.pct, s.color, '8px')}
    <div class="sd-chs">${chs}</div>
  </div>`;
}

function renderQF() {
  return `<div class="qf" role="group">${[
    ['all', 'All Topics'],
    ['incomplete', 'Incomplete'],
    ['completed', 'Completed'],
    ['high-priority', 'High Priority (≥5%)'],
    ['focus', "Today's Focus"]
  ].map(([v, l]) => `<button class="qf-btn ${S.filters.quick === v ? 'qf-active' : ''}" data-qf="${v}">${l}</button>`).join('')}</div>`;
}

function renderFP() {
  const sel = (id, opts, val, lbl) => `
    <div class="fp-grp">
      <label for="${id}" class="fp-lbl">${lbl}</label>
      <select id="${id}" class="fp-sel" data-fk="${id}">
        ${opts.map(([v, l]) => `<option value="${v}"${val === v ? ' selected' : ''}>${l}</option>`).join('')}
      </select>
    </div>`;

  return `<div class="fp ${S.filtersOpen ? 'fp-open' : ''}" id="fp">
    <div class="fp-row">
      ${sel('fp-subj', [['all', 'All Subjects'], ...STUDY_DATA.subjects.map(s => [s.id, s.name])], S.filters.subj, 'Subject')}
      ${sel('fp-status', [['all', 'All Status'], ['incomplete', 'Incomplete Only'], ['completed', 'Completed Only']], S.filters.status, 'Status')}
      ${sel('fp-prio', [['all', 'All Priorities'], ['very-high', 'Very High (≥10%)'], ['high', 'High (5-9%)'], ['medium', 'Medium (2-4%)'], ['low', 'Low (<2%)']], S.filters.prio, 'Priority')}
      ${sel('fp-sort', [['imp-desc', 'Highest Importance'], ['imp-asc', 'Lowest Importance'], ['alpha', 'Alphabetical'], ['inc-first', 'Incomplete First'], ['done-first', 'Completed First']], S.filters.sort, 'Sort')}
      <div class="fp-grp"><button class="fp-clear" id="fp-clear">Reset Filters</button></div>
    </div>
  </div>`;
}

// ============================================================
// HEADER & SIDEBAR
// ============================================================
function renderHeader() {
  const ov = overallProg();
  return `<header class="hdr" role="banner">
    <div class="hdr-l">
      <button class="hamburger ${S.sidebarOpen ? 'hb-open' : ''}" id="hb" aria-label="Toggle navigation menu" aria-expanded="${S.sidebarOpen}">
        <span></span><span></span><span></span>
      </button>
      <a href="#dashboard" class="logo" id="logo-link">
        <span class="logo-ico">🚔</span>
        <div class="logo-txt">
          <span class="logo-t">UP Police Study Tracker</span>
          <span class="logo-s">Computer Operator Grade-A</span>
        </div>
      </a>
    </div>
    <div class="hdr-c">
      <button class="srch-btn" id="srch-btn" aria-label="Search syllabus topics">
        <span>🔍</span>
        <span class="srch-ph">Search topics or chapters...</span>
        <kbd>Ctrl+K</kbd>
      </button>
    </div>
    <div class="hdr-r">
      <div class="hdr-prog">
        <span class="hdr-pct" id="hdr-pct">${ov.pct}%</span>
        <div class="hdr-bar" id="hdr-bar">${bar(ov.pct, '#6366f1', '5px')}</div>
      </div>
      <button class="theme-btn" id="theme-btn" aria-label="Toggle theme">
        ${S.theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  </header>`;
}

function renderSidebar() {
  const links = STUDY_DATA.subjects.map(s => {
    const sp = subjectProg(s);
    const a = S.view === 'subject' && S.subjId === s.id;
    return `<a href="#${s.id}" class="sl ${a ? 'sl-a' : ''}" data-v="subject" data-sid="${s.id}">
      <span class="sl-ico">${s.icon}</span>
      <div class="sl-info">
        <span class="sl-n">${esc(s.name)}</span>
        <span class="sl-m">${sp.pct}% · ${sp.c}/${sp.t}</span>
      </div>
      <span class="sl-chev">›</span>
    </a>`;
  }).join('');

  return `<nav class="sidebar ${S.sidebarOpen ? 'sb-open' : ''}" id="sidebar" aria-label="Navigation">
    <div class="sb-nav">
      <div class="sb-sec-lbl">Dashboard</div>
      <a href="#dashboard" class="sl ${S.view === 'dashboard' ? 'sl-a' : ''}" data-v="dashboard">
        <span class="sl-ico">📊</span><span class="sl-n">Overview</span>
      </a>
      <a href="#focus" class="sl ${S.view === 'focus' ? 'sl-a' : ''}" data-v="focus">
        <span class="sl-ico">🎯</span><span class="sl-n">High-Yield Focus</span>
      </a>
      <div class="sb-div"></div>
      <div class="sb-sec-lbl">Subjects</div>
      ${links}
      <div class="sb-div"></div>
      <div class="sb-sec-lbl">Data Management</div>
      <button class="sl sb-btn" id="sb-export"><span class="sl-ico">📥</span><span class="sl-n">Export Backup</span></button>
      <button class="sl sb-btn" id="sb-import"><span class="sl-ico">📤</span><span class="sl-n">Import Backup</span></button>
      <button class="sl sb-btn" id="sb-reset"><span class="sl-ico">🔄</span><span class="sl-n">Reset All Data</span></button>
    </div>
    <div class="sb-footer">
      <div>UP Police Prep v1.0</div>
      <small>Local-First · No Cloud Required</small>
    </div>
  </nav>`;
}

function renderModals() {
  return `
  <div class="modal-ov" id="search-modal" role="dialog" aria-modal="true" hidden>
    <div class="search-inner">
      <div class="si-wrap">
        <span>🔍</span>
        <input type="search" id="search-inp" class="si" placeholder="Type topic, chapter, or keyword..." autocomplete="off">
        <kbd>Esc</kbd>
      </div>
      <div class="sr" id="sr" aria-live="polite"></div>
    </div>
  </div>
  <div class="modal-ov" id="reset-modal" role="dialog" aria-modal="true" hidden>
    <div class="modal-box">
      <div class="modal-title">Reset Preparation Progress?</div>
      <div class="modal-body">This will uncheck all completed topics and reset your progress counter. This action cannot be undone.</div>
      <div class="modal-acts">
        <button class="btn btn-ghost" id="rc">Cancel</button>
        <button class="btn btn-danger" id="ro">Reset Everything</button>
      </div>
    </div>
  </div>
  <div class="modal-ov" id="import-modal" role="dialog" aria-modal="true" hidden>
    <div class="modal-box">
      <div class="modal-title">Import Progress Backup</div>
      <div class="modal-body">Select a previously exported <code>.json</code> file to restore your study history.</div>
      <input type="file" id="imp-file" accept=".json,application/json" class="file-inp">
      <div class="modal-acts">
        <button class="btn btn-ghost" id="ic">Cancel</button>
        <button class="btn btn-primary" id="io">Restore Backup</button>
      </div>
    </div>
  </div>`;
}

function renderBN() {
  return `<nav class="bn" id="bn" aria-label="Mobile quick navigation">
    <a href="#dashboard" class="bn-i" data-v="dashboard" data-sid=""><span>📊</span><span>Home</span></a>
    <a href="#computer-science" class="bn-i" data-v="subject" data-sid="computer-science"><span>💻</span><span>CS</span></a>
    <a href="#focus" class="bn-i" data-v="focus" data-sid=""><span>🎯</span><span>Focus</span></a>
    <a href="#reasoning" class="bn-i" data-v="subject" data-sid="reasoning"><span>🧠</span><span>Reasoning</span></a>
    <a href="#general-knowledge" class="bn-i" data-v="subject" data-sid="general-knowledge"><span>🌐</span><span>GK</span></a>
  </nav>`;
}

// ============================================================
// MAIN RENDER CONTROLLER
// ============================================================
function renderMain() {
  const main = document.getElementById('main');
  if (!main) return;
  let html = '';
  if (S.view === 'subject' && S.subjId) {
    html = renderSubjDetail(S.subjId);
  } else if (S.view === 'focus') {
    html = renderFocus();
  } else {
    html = renderDashboard() + `
      <div class="tracker-sec">
        <div class="tr-hdr">
          <div class="sec-title">Complete Topic Directory</div>
          <button class="filter-toggle" id="filt-tog" aria-expanded="${S.filtersOpen}">
            Filters ${S.filtersOpen ? '▲' : '▼'}
          </button>
        </div>
        ${renderQF()}
        ${renderFP()}
        <div class="tracker-list" id="tracker-list">${renderTracker()}</div>
      </div>`;
  }
  main.innerHTML = html;
  attachMainL();
}

function updateProgress() {
  const ov = overallProg();
  const hdrPct = document.getElementById('hdr-pct');
  const hdrBar = document.getElementById('hdr-bar');
  if (hdrPct) hdrPct.textContent = ov.pct + '%';
  if (hdrBar) hdrBar.innerHTML = bar(ov.pct, '#6366f1', '5px');

  document.querySelectorAll('#sidebar [data-v="subject"][data-sid]').forEach(el => {
    const s = STUDY_DATA.subjects.find(x => x.id === el.dataset.sid);
    if (!s) return;
    const sp = subjectProg(s);
    const m = el.querySelector('.sl-m');
    if (m) m.innerHTML = `${sp.pct}% · ${sp.c}/${sp.t}`;
  });

  const rw = document.getElementById('ring-wrap');
  if (rw) rw.innerHTML = ring(ov.pct, 88, 8, '#6366f1');

  const stn = document.getElementById('sc-topics-n');
  if (stn) stn.innerHTML = `${ov.c}<span class="sc-den">/${ov.t}</span>`;

  const hpn = document.getElementById('sc-hp-n');
  if (hpn) hpn.textContent = hpRemaining();

  const sprList = document.getElementById('spr-list');
  if (sprList) {
    STUDY_DATA.subjects.forEach(s => {
      const sp = subjectProg(s);
      const row = sprList.querySelector(`[data-sid="${s.id}"]`);
      if (!row) return;
      const cnt = row.querySelector('.spr-r span:first-child');
      if (cnt) cnt.textContent = `${sp.c}/${sp.t}`;
      const pct = row.querySelector('.spr-r span:last-child');
      if (pct) pct.textContent = `${sp.pct}%`;
      const bt = row.querySelector('.bar-track');
      if (bt) bt.outerHTML = bar(sp.pct, s.color, '4px');
    });
  }

  const bd = prioBD();
  const bdKeys = ['vh', 'h', 'm', 'l'];
  document.querySelectorAll('.bdr').forEach((row, i) => {
    const d = bd[bdKeys[i]];
    if (!d) return;
    const pct = d.t ? Math.round((d.c / d.t) * 100) : 0;
    const bdBar = row.querySelector('.bd-bar');
    if (bdBar) bdBar.innerHTML = bar(pct, '', '6px');
    const bdPct = row.querySelector('.bd-pct');
    if (bdPct) bdPct.textContent = `${d.c}/${d.t} (${pct}%)`;
  });

  const tl = document.getElementById('tracker-list');
  if (tl) tl.innerHTML = renderTracker();

  const sdMeta = document.getElementById('sd-meta');
  const sdRing = document.getElementById('sd-ring');
  if (sdMeta && S.subjId) {
    const s = STUDY_DATA.subjects.find(x => x.id === S.subjId);
    if (s) {
      const sp = subjectProg(s);
      sdMeta.textContent = `Exam Weightage: ${s.weight}% · ${sp.c}/${sp.t} completed · ${sp.pct}%`;
      if (sdRing) sdRing.innerHTML = ring(sp.pct, 76, 7, s.color);
    }
  }

  updateBNActive();
}

// ============================================================
// ROUTING & APP NAVIGATION
// ============================================================
function nav(view, sid = null) {
  S.view = view;
  S.subjId = sid;
  const hash = view === 'subject' && sid ? `#${sid}` : view === 'focus' ? '#focus' : '#dashboard';
  history.pushState({ view, sid }, '', hash);
  renderMain();
  updateSBActive();
  updateBNActive();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateSBActive() {
  document.querySelectorAll('#sidebar [data-v]').forEach(el => {
    const a = el.dataset.v === S.view && (!el.dataset.sid || el.dataset.sid === S.subjId);
    el.classList.toggle('sl-a', a);
  });
}

function updateBNActive() {
  document.querySelectorAll('.bn-i').forEach(el => {
    const a = el.dataset.v === S.view && (!el.dataset.sid || el.dataset.sid === S.subjId);
    el.classList.toggle('bn-a', a);
  });
}

function handleHash() {
  const h = location.hash.replace('#', '');
  if (!h || h === 'dashboard') {
    S.view = 'dashboard';
    S.subjId = null;
  } else if (h === 'focus') {
    S.view = 'focus';
    S.subjId = null;
  } else {
    const s = STUDY_DATA.subjects.find(x => x.id === h);
    if (s) {
      S.view = 'subject';
      S.subjId = h;
    } else {
      S.view = 'dashboard';
      S.subjId = null;
    }
  }
}

// ============================================================
// SIDEBAR & THEME
// ============================================================
function openSB() {
  S.sidebarOpen = true;
  document.getElementById('sidebar')?.classList.add('sb-open');
  document.getElementById('sb-ov')?.classList.add('sbo-active');
  document.getElementById('hb')?.classList.add('hb-open');
  document.body.classList.add('sb-open');
}

function closeSB() {
  S.sidebarOpen = false;
  document.getElementById('sidebar')?.classList.remove('sb-open');
  document.getElementById('sb-ov')?.classList.remove('sbo-active');
  document.getElementById('hb')?.classList.remove('hb-open');
  document.body.classList.remove('sb-open');
}

function toggleSB() {
  S.sidebarOpen ? closeSB() : openSB();
}

function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  const b = document.getElementById('theme-btn');
  if (b) {
    b.innerHTML = t === 'dark' ? '☀️' : '🌙';
    b.setAttribute('aria-label', `Switch to ${t === 'dark' ? 'light' : 'dark'} mode`);
  }
}

function toggleTheme() {
  S.theme = S.theme === 'dark' ? 'light' : 'dark';
  applyTheme(S.theme);
  saveState();
}

// ============================================================
// SEARCH LOGIC
// ============================================================
let srchTimer = null;
function openSearch() {
  const m = document.getElementById('search-modal');
  if (!m) return;
  m.hidden = false;
  const i = document.getElementById('search-inp');
  if (i) {
    i.value = '';
    i.focus();
  }
  document.getElementById('sr').innerHTML = '<div class="sr-empty">Start typing to search 400+ topics...</div>';
}

function closeSearch() {
  const m = document.getElementById('search-modal');
  if (m) m.hidden = true;
  S.filters.q = '';
}

function attachSearchL() {
  const inp = document.getElementById('search-inp');
  if (!inp) return;
  inp.addEventListener('input', e => {
    clearTimeout(srchTimer);
    const q = e.target.value;
    srchTimer = setTimeout(() => {
      S.filters.q = q;
      const sr = document.getElementById('sr');
      if (!sr) return;
      if (!q.trim()) {
        sr.innerHTML = '<div class="sr-empty">Start typing to search...</div>';
        return;
      }
      const data = filteredData();
      const total = data.reduce((s, d) => s + d.ts.length, 0);
      if (!total) {
        sr.innerHTML = `<div class="sr-empty">No results found for "<strong>${esc(q)}</strong>"</div>`;
        return;
      }
      let html = `<div class="sr-count">${total} match${total !== 1 ? 'es' : ''}</div>`;
      for (const { s, ch, ts } of data) {
        if (!ts.length) continue;
        html += `<div class="sr-grp">
          <div class="sr-subj">${s.icon} ${hi(s.name, q)} › ${hi(ch.name, q)}</div>
          ${ts.map(t => `
            <div class="sr-t">
              <label class="t-label" for="sr-${t.id}">
                <input type="checkbox" id="sr-${t.id}" class="t-cb" data-tid="${t.id}" ${S.done[t.id] ? 'checked' : ''}>
                <span class="t-custom-cb small" aria-hidden="true"></span>
                <span class="t-name ${S.done[t.id] ? 't-done' : ''}">${hi(t.name, q)}</span>
              </label>
              <div class="sr-actions">
                <a href="${getChatGptUrl(t.name, ch.name, s.name)}" target="_blank" rel="noopener noreferrer" class="ai-btn small" title="Explain '${esc(t.name)}' with ChatGPT">
                  <span class="ai-btn-icon">🤖</span>
                  <span class="ai-btn-text">ChatGPT</span>
                </a>
                ${badge(ch.importance)}
              </div>
            </div>`).join('')}
        </div>`;
      }
      sr.innerHTML = html;
    }, DEBOUNCE_MS);
  });
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function attachMainL() {
  const main = document.getElementById('main');
  if (!main) return;
  main.querySelector('#back-btn')?.addEventListener('click', () => nav('dashboard'));
  main.querySelectorAll('.spr').forEach(r => {
    r.addEventListener('click', () => nav('subject', r.dataset.sid));
    r.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        nav('subject', r.dataset.sid);
      }
    });
  });
  main.querySelector('#filt-tog')?.addEventListener('click', () => {
    S.filtersOpen = !S.filtersOpen;
    const fp = main.querySelector('#fp');
    if (fp) fp.classList.toggle('fp-open', S.filtersOpen);
    const btn = main.querySelector('#filt-tog');
    if (btn) {
      btn.setAttribute('aria-expanded', S.filtersOpen);
      btn.innerHTML = `Filters ${S.filtersOpen ? '▲' : '▼'}`;
    }
  });
  main.querySelectorAll('.qf-btn').forEach(btn => btn.addEventListener('click', () => {
    S.filters.quick = btn.dataset.qf;
    saveState();
    main.querySelectorAll('.qf-btn').forEach(b => b.classList.toggle('qf-active', b.dataset.qf === btn.dataset.qf));
    const tl = main.querySelector('#tracker-list');
    if (tl) tl.innerHTML = renderTracker();
  }));
  main.querySelectorAll('.fp-sel').forEach(sel => sel.addEventListener('change', () => {
    const k = { 'fp-subj': 'subj', 'fp-status': 'status', 'fp-prio': 'prio', 'fp-sort': 'sort' }[sel.id];
    if (k) {
      S.filters[k] = sel.value;
      saveState();
    }
    const tl = main.querySelector('#tracker-list');
    if (tl) tl.innerHTML = renderTracker();
  }));
  main.querySelector('#fp-clear')?.addEventListener('click', () => {
    Object.assign(S.filters, { subj: 'all', status: 'all', prio: 'all', sort: 'imp-desc', quick: 'all', q: '' });
    saveState();
    renderMain();
  });
}

function attachGlobal() {
  document.addEventListener('change', e => {
    const cb = e.target.closest('.t-cb');
    if (!cb) return;
    const id = cb.dataset.tid;
    if (!id) return;
    const completing = cb.checked;
    toggleTopic(id);
    if (completing) toast('Marked topic complete! Keep it up!', 'success');
  });

  document.addEventListener('click', e => {
    const st = e.target.closest('[data-ts]');
    if (st) {
      const sid = st.dataset.ts;
      const wasExp = S.expSubj[sid] !== false;
      S.expSubj[sid] = !wasExp;
      saveState();
      const body = document.querySelector(`#sb-${sid} .s-body`);
      const chev = st.querySelector('.chev');
      if (body) body.classList.toggle('coll', wasExp);
      if (chev) chev.classList.toggle('exp', !wasExp);
      st.setAttribute('aria-expanded', !wasExp);
      return;
    }
    const ct = e.target.closest('[data-tc]');
    if (ct) {
      const cid = ct.dataset.tc;
      const wasExp = S.expChap[cid] !== false;
      S.expChap[cid] = !wasExp;
      saveState();
      const body = document.querySelector(`#cb-${cid} .ch-body`);
      const chev = ct.querySelector('.chev');
      if (body) body.classList.toggle('coll', wasExp);
      if (chev) chev.classList.toggle('exp', !wasExp);
      ct.setAttribute('aria-expanded', !wasExp);
      return;
    }
    if (e.target.id === 'sb-ov') closeSB();
    if (e.target.id === 'search-modal') closeSearch();
    if (e.target.id === 'reset-modal') closeM('reset-modal');
    if (e.target.id === 'import-modal') closeM('import-modal');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!document.getElementById('search-modal').hidden) { closeSearch(); return; }
      if (!document.getElementById('reset-modal').hidden) { closeM('reset-modal'); return; }
      if (!document.getElementById('import-modal').hidden) { closeM('import-modal'); return; }
      if (S.sidebarOpen) { closeSB(); return; }
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if ((e.key === 'Enter' || e.key === ' ') && (e.target.hasAttribute('data-ts') || e.target.hasAttribute('data-tc'))) {
      e.preventDefault();
      e.target.click();
    }
  });
}

function openM(id) {
  const m = document.getElementById(id);
  if (m) {
    m.hidden = false;
    m.querySelector('button')?.focus();
  }
}

function closeM(id) {
  const m = document.getElementById(id);
  if (m) m.hidden = true;
}

function attachModalL() {
  document.getElementById('rc')?.addEventListener('click', () => closeM('reset-modal'));
  document.getElementById('ro')?.addEventListener('click', () => {
    resetProgress();
    closeM('reset-modal');
    renderMain();
  });
  document.getElementById('ic')?.addEventListener('click', () => closeM('import-modal'));
  document.getElementById('io')?.addEventListener('click', () => {
    const f = document.getElementById('imp-file');
    if (!f?.files.length) {
      toast('Please choose a valid JSON backup file', 'error');
      return;
    }
    const r = new FileReader();
    r.onload = ev => {
      importProg(ev.target.result);
      closeM('import-modal');
      renderMain();
    };
    r.readAsText(f.files[0]);
  });
}

function attachHdrL() {
  document.getElementById('hb')?.addEventListener('click', toggleSB);
  document.getElementById('srch-btn')?.addEventListener('click', openSearch);
  document.getElementById('theme-btn')?.addEventListener('click', toggleTheme);
  document.getElementById('logo-link')?.addEventListener('click', e => {
    e.preventDefault();
    nav('dashboard');
  });
}

function attachSBL() {
  document.querySelectorAll('#sidebar [data-v]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      nav(el.dataset.v, el.dataset.sid || null);
      closeSB();
    });
  });
  document.getElementById('sb-reset')?.addEventListener('click', () => {
    openM('reset-modal');
    closeSB();
  });
  document.getElementById('sb-export')?.addEventListener('click', () => {
    exportProg();
    closeSB();
  });
  document.getElementById('sb-import')?.addEventListener('click', () => {
    openM('import-modal');
    closeSB();
  });
}

function attachBNL() {
  document.querySelectorAll('.bn-i').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      nav(el.dataset.v, el.dataset.sid || null);
    });
  });
}

// ============================================================
// APP BOOTSTRAP
// ============================================================
function init() {
  loadState();
  handleHash();
  applyTheme(S.theme);

  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = `
    <div id="app-hdr">${renderHeader()}</div>
    <div class="app-body">
      <div id="sb-ov" class="sb-overlay"></div>
      ${renderSidebar()}
      <main id="main" class="main" role="main" aria-label="Main study tracker content"></main>
    </div>
    ${renderModals()}
    <div id="toasts" class="toasts" aria-live="assertive" aria-atomic="true"></div>
    ${renderBN()}`;

  renderMain();
  attachHdrL();
  attachSBL();
  attachGlobal();
  attachSearchL();
  attachModalL();
  attachBNL();

  window.addEventListener('popstate', () => {
    handleHash();
    renderMain();
    updateSBActive();
    updateBNActive();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  updateBNActive();
}

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
