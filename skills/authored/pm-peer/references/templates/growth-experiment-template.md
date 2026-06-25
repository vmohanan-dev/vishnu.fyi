---
description: Growth and A/B experiment template with hypothesis statement, experiment design, cohort segmentation, traffic planning, success metrics, and results framework — for growth and experimentation PMs.
---

TEMPLATE - MAKE A COPY!

| [Experiment ID]: [Experiment Name] | |  |
| :--- | --- | :--- |
| **Status:** [Pick Status] as of [date] **Next Steps:** *The TLDR next action you're taking. (Do you have any hurdles? When is the next check-in/meeting to move this forward? Was this productized? etc)* | | **DRI(s):** **Experiment Slack Channel:** #exp000-experiment-name |

# Observation & Opportunity:

### Distill your thinking into this statement:

*Hypothesis: A statement about what you believe to be true today*

We believe that {customers are experiencing X problem} based on {some piece of distilled observation / data / evidence}.

*Prediction: What you believe will happen if your hypothesis is true*

If we {make X change to the user experience} for {user segment} we will see {more/fewer users doing} {X Primary KPI}.

*Objective: the business or user objective you're trying to solve*

Overall we are seeking to {increase / decrease} {X North Star/Business KPI}.

*Why did you pick this experiment?*
We believe that {customers are experiencing X problem} based on {some piece of distilled observation / data / evidence}.

### Share Background Context:

Use this section to reference historical context/research/previous experiments.

Use this section to connect this hypothesis to your team's OKRs and priorities/missions.

# Experiment Design:

**Overview of what's changing**

| CONTROL | VARIANT |
| :---- | :---- |
| *[Control screenshot]* | *[Variant screenshot]* |
| Highlight a TLDR on specific UX / UI challenges you want to focus on and why | Any additional high level commentary on specific changes and why we believe those will deliver the outcome we're trying to achieve |

**Link to detailed user flows**

\<Add Figma or design tool link here\>

*Please include a link to an annotated design file that outlines what's changing in detail. These should be clear enough that someone not on your team can go in to understand what you're changing and why.*

**Specific assumptions and changes**

| Variable | Treatment/Changes Variable | Reasoning and Risks |
| :---- | :---- | :---- |
| Number of CTAs | Adding a 3rd CTA to paywalls | More choice makes users likely to pick the CTA that meets their needs. However offering more options creates confusion on what action the user feels they should take, leading to an increase in service calls. |
| Micro-copy of CTAs | Changing "Talk to Sales" to "Talk to an Expert" | Increase in trial volume. Maintain trial monetization. |

### Technical Implementation:

Use this table to align your business logic and technical implementation of this experiment:

| Tool you are using for cohort segmentation *(e.g. feature flags, A/B testing platform, growth tool)* | [Your tool] |
| :---- | :---- |
| Type of rollout *e.g. phased, 50/50* | 50/50 A/B Test |
| Specific cohort callouts and exclusions *Consider: language, location, company size, plan type, signup types, new/existing users, free/paid...* | |
| Exposure Trigger *What is the top of the funnel? Where do users split into cohorts where their experiences differ?* | |
| Tracking Requirement(s) *Are there any new events or properties we need tracked to successfully measure this experiment?* | |

### Define Experiment Success:

| | KPI Name/Definition |
| :---- | :---: |
| **North Star Metric** *Often your team's long-term success metric.* | |
| **Primary Experiment Metric** *Which metric defines success for this specific hypothesis? It should correlate to your North Star Metric.* | |
| **(Optional) Secondary Experiment Metric** *Which metrics provide answers to the hypothesis but are not a deal breaker for productization?* | |
| **Guardrail Metric(s)** *Are there any metrics you need to monitor? Think about what flows/metrics are "at-risk" with your experiment design.* | |

### Experiment Duration:

*Use a traffic planning calculator (e.g. Evan Miller's A/B test calculator or your analytics platform's built-in estimator) to determine how long to run the experiment.*

| Measure your Baseline: | |
| ----- | :---- |
| Our current volume & primary metric baseline is: | X,000 users per day, X% conversion rate |
| **Plan your Experiment** Calculate 3 different scenarios based on the baseline | |
| To detect an X% improvement at 95% significance | It would take X weeks |
| 10% improvement | X weeks |
| 12% improvement | X weeks |
| 25% improvement | X weeks |

# Results, Learnings & Next Steps

Not every experiment has a winning outcome. That's ok! You should ***always always always*** be learning though. So let's talk about what you learned and what the next steps are.

| Metrics Results | KPI Name/Definition with link to Experiment Reporting | Control | Variant | % Diff and Significance |
| :---- | :---: | ----- | ----- | ----- |
| **North Star Metric** | | | | |
| **Primary Experiment Metric** | | | | |
| **Secondary Metric(s)** | | | | |
| **Guardrail Metric(s)** | | | | |

| Hypothesis Interpretation & Next Steps | |
| :---- | :---- |
| **Was your hypothesis correct/validated?** | |
| **What new information did you learn?** *E.g. any unexpected or interesting results?* | |
| **Productizing?** Yes/No | |
| **Date of Experiment Readout & Link to Readout Doc:** | |
| **How will you incorporate your learnings into future work?** *E.g. systematize / amplify wins to other areas, test new hypotheses, do new research, iterate on an adjacent opportunity space, etc* | |
