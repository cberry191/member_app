Api and Front-end for member app for Agoge BJJ ( + other gyms? )

MVP for processing memberships and storing necessary member info

Use cases:

    Unauthorised can:
    View info
    book intro
    start membership

    Member can:
    edit profile
    view memberships
    add / purchase memberships + gear

    Coach can:
    View calendar
    book privates for themselves on calendar
    edit profile 
    view member contact info

    Admin can:
    create new memberships
    create classes / events / appointments on calendar / schedule

Architecture:

    Node.JS backend
    React Front end
    MySql DB
    Tailwind css

Entities
    Member
        name
        phone
        email
        DOB
        Date Joined
        photo
        belt
        stripes
        payment
        waiver
        emergency contact



    Membership
        Group (kids, adults, coaches)
        Name    (unlimited, 2 /week, 10-pass)
        expires (term, 10-week etc)
        cost
        recurs

Generatable Reports:
    Grading info - attendance, current rank, date of awarding of current rank
    Missing info - waiver, emergency contact