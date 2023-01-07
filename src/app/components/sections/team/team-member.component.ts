import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  template: `
    <div class="team-member">
      <img
        class="mx-auto rounded-circle"
        src="assets/img/team/1.jpg"
        alt="..."
      />
      <h4>Parveen Anand</h4>
      <p class="text-muted">Lead Designer</p>
      <a
        class="btn btn-dark btn-social mx-2"
        href="#!"
        aria-label="Parveen Anand Twitter Profile"
        ><i class="fab fa-twitter"></i
      ></a>
      <a
        class="btn btn-dark btn-social mx-2"
        href="#!"
        aria-label="Parveen Anand Facebook Profile"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a
        class="btn btn-dark btn-social mx-2"
        href="#!"
        aria-label="Parveen Anand LinkedIn Profile"
        ><i class="fab fa-linkedin-in"></i
      ></a>
    </div>
`,
  styles: [``],
})
export class TeamMemberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
