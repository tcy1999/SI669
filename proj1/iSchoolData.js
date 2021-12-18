

// from here: https://ischools.org/members/directory/
// cleaned using Excel
const iSchoolNames = [
    'University of Arizona: School of Information',
    'University of California, Berkeley: School of Information',
    'University of British Columbia: The School of Information',
    'Carnegie Mellon University: Heinz College of Information Systems and Public Policy',
    'Central China Normal University: School of Information Management',
    'University of the Chinese Academy of Sciences: Department of Library, Information and Archives Management',
    'Cornell University: Faculty of Computing and Information Science',
    'Drexel University: College Computing and Informatics',
    'Florida State University: College of Communication and Information',
    'Georgia Tech: College of Computing',
    'Humboldt-Universität zu Berlin: Berlin School of Library and Information Science',
    'University of Illinois at Urbana-Champaign: School of Information Sciences',
    'Indiana University Bloomington: The Luddy School of Informatics, Computing, and Engineering',
    'University of California, Irvine: Donald Bren School of Information and Computer Sciences',
    'Jilin University: School of Management',
    'University of Kentucky: College of Communications and Information',
    'University of Maryland - Baltimore County: Department of Information Systems',
    'University of Maryland: College of Information Studies',
    'University of Michigan: School of Information',
    'University of Missouri: School of Information Science and Learning Technologies (SISLT)',
    'Monash University: Faculty of Information Technology',
    'Nanjing University of Science and Technology: School of Economics and Management',
    'University of North Carolina at Chapel Hill: School of Information and Library Science',
    'University of North Texas: College of Information',
    'Peking University: Department of Information Management',
    'The Pennsylvania State University: College of Information Sciences and Technology',
    'University of Pittsburgh: School of Computing and Information',
    'Renmin University of China: School of Information Resource Management',
    'Rochester Institute of Technology: School of Information',
    'The State University of New Jersey, Rutgers: School of Communication and Information',
    'San Jose State University: School of Information',
    'University of Sheffield: Information School',
    'Syracuse University: School of Information Studies',
    'The University of Tennessee: School of Information Sciences',
    'University of Texas at Austin: School of Information',
    'University of California, Los Angeles: Graduate School of Education and Information Studies',
    'University of Washington: The Information School',
    'Wuhan University: School of Information Management',
    'Zhengzhou University: School of Information Management'
];

class iSchool {
    constructor(s) {
        let parts = s.split(":");
        this.univ = parts[0].trim();
        this.school = parts[1].trim();
        this.ranking = -1;
        this.key = s;
    }
}

export function getISchools() {
    let iSchools = [];
    for (let s of iSchoolNames) {
        iSchools.push(new iSchool(s));
    }    
    return iSchools;
}
