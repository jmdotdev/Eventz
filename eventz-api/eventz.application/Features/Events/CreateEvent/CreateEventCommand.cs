using MediatR;


public record CreateEventCommand(string Name, string Description, DateTime StartDate, DateTime EndDate, int Capacity, bool IsPublic, string OrganizerId, int VenueId, int CategoryId) : IRequest<Guid>;