using Eventz.Domain.Entitites;
using MediatR;



public record GetEventsQuery(): IRequest<List<Event>>;